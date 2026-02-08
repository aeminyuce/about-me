import * as React from 'react';
import { createContext, useContext, useReducer, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loadingmask from 'uilab/react/Loadingmask';
import Service from '../services/Service';
import { getPageData, getHomeData, getHomeFeaturedData, getLabData, getIconsData, getBlogData } from '../services/Repository';

// misc
import type { StoreContextProps, StoreProviderProps } from '../models/Page';
import reducer from './StoreReducer';
import {

	// state
	CURRENT_THEME_A, CURRENT_THEME_B, ICON_SIZE,

	// data
	PAGE_DATA, HOME_DATA, HOME_FEATURED_DATA, LAB_DATA, ICONS_DATA, BLOG_DATA

} from './Actions';

export const StoreContext = createContext({} as StoreContextProps);

export default function (props: StoreProviderProps) {
    const { children, initialValue } = props;

    const service = new Service();
    const { pathname, search } = useLocation();

    const [state, dispatch] = useReducer(reducer, initialValue);

    useEffect(() => {
        // load page data from api when set your api urls
        loadPageData();
    }, []);

    useEffect(() => {
        // route based data
        if (['/', '/dashboard'].includes(pathname) && !state?.api?.home) {
            loadHomeData();
        }

        if (pathname === '/' && !state?.api?.home_featured) {
            loadHomeFeaturedData();

        } else if (pathname.startsWith('/lab')) {
            let page = null;
            const isUrl = (name: string) => pathname.startsWith(`/lab/${name}`);

            if (isUrl('alerts')) page = 'alerts';
            if (isUrl('avatars')) page = 'avatars';
            if (isUrl('breadcrumbs')) page = 'breadcrumbs';

            if (!state?.api?.lab) loadLabData();
            if (page && !(state.api.lab && state.api.lab[page])) loadLabData(page);

        } else if (pathname.startsWith('/icons') && !state?.api?.icons) {
            loadIconsData();

        } else if (pathname.startsWith('/blog')) {
            const params = new URLSearchParams(search);
            const post = params.get('post');

            const isArchive = !post && !state?.api?.blog?.archives;
            const isPost = post && !(state?.api?.blog && state.api.blog[post]);

            if (isArchive || isPost) Loadingmask('body'); // trigger when param changed
            if (isArchive) loadBlogData();
            if (isPost) loadBlogData(post);

        } else Loadingmask();
    }, [pathname, search]);

    // themes
    const setThemeA = (name: string) => {
        dispatch({
            type: CURRENT_THEME_A,
            themeA: name,
        });
    };
    const setThemeB = (name: string) => {
        dispatch({
            type: CURRENT_THEME_B,
            themeB: name,
        });
    };

    // icons
    const setIconSize = (name: string) => {
        dispatch({
            type: ICON_SIZE,
            iconSize: name,
        });
    }

    // fetch page data
    const loadPageData = () => {
        getPageData(service).then((response: any) => {
            dispatch({
                type: PAGE_DATA,
                result: response?.result,
            });
        });
    };

    // fetch data from other pages
    const loadHomeData = () => {
        getHomeData(service).then((response: any) => {
            dispatch({
                type: HOME_DATA,
                result: response?.result,
            });
        });
    };
    const loadHomeFeaturedData = () => {
        getHomeFeaturedData(service).then((response: any) => {
            dispatch({
                type: HOME_FEATURED_DATA,
                result: response?.result,
            });
        });
    };
    const loadLabData = (page?: string) => {
        getLabData(service, page).then((response: any) => {
            dispatch({
                type: LAB_DATA,
                result: response?.result,
                page: page,
            });
        });
    };
    const loadIconsData = () => {
        getIconsData(service).then((response: any) => {
            dispatch({
                type: ICONS_DATA,
                result: response?.result,
            });
        });
    };
    const loadBlogData = (post?: string) => {
        const params = post ? `?target_table=${post}` : null;

        getBlogData(service, params).then((response: any) => {
            dispatch({
                type: BLOG_DATA,
                result: response?.result,
                post: post,
            });
        });
    };

    const contextValue: StoreContextProps =  {
        ...state,

        // state
        setThemeA,
        setThemeB,
        setIconSize,

        // data
        loadHomeData,
        loadHomeFeaturedData,
        loadLabData,
        loadIconsData,
        loadBlogData,
    };

    return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>
};

export const useStoreContext = () => {
    return useContext(StoreContext);
};