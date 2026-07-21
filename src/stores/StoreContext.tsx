import React, { createContext, useContext, useReducer } from 'react';
import { useMatches } from 'react-router';
import { getPageData, getHomeData, getHomeFeaturedData, getLabData, getIconsData, getBlogData } from '../services/Repository';
import Service from '../services/Service';

// misc
import type { StoreContextProps, StoreProviderProps } from '../models/Page';
import { scrollToTop } from '../helpers/General';
import reducer from './StoreReducer';
import {

	// state
	CURRENT_THEME_A, CURRENT_THEME_B,

	// data
	PAGE_DATA, HOME_DATA, HOME_FEATURED_DATA, LAB_DATA, ICONS_DATA, BLOG_DATA

} from './Actions';

const cachedLoaders: string[] = [];
export const StoreContext = createContext({} as StoreContextProps);

export default function (props: StoreProviderProps) {
    const { children, initialValue } = props;
    const [state, dispatch] = useReducer(reducer, initialValue);

    const service = new Service();
    const matches = useMatches();

    // themes
    const setThemeA = (name: string) => {
        dispatch({
            type: CURRENT_THEME_A,
            themeA: name,
        });
    }
    const setThemeB = (name: string) => {
        dispatch({
            type: CURRENT_THEME_B,
            themeB: name,
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
    }

    // fetch data from other pages
    const loadHomeData = () => {
        getHomeData(service).then((response: any) => {
            dispatch({
                type: HOME_DATA,
                result: response?.result,
            });
        });
        scrollToTop();
    }
    const loadHomeFeaturedData = () => {
        getHomeFeaturedData(service).then((response: any) => {
            dispatch({
                type: HOME_FEATURED_DATA,
                result: response?.result,
            });
        });
        scrollToTop();
    }
    const loadLabData = (page?: string) => {
        getLabData(service, page).then((response: any) => {
            dispatch({
                type: LAB_DATA,
                result: response?.result,
                page: page,
            });
        });
        scrollToTop();
    }
    const loadIconsData = () => {
        getIconsData(service).then((response: any) => {
            dispatch({
                type: ICONS_DATA,
                result: response?.result,
            });
        });
        scrollToTop();
    }
    const loadBlogData = (post?: string) => {
        const params = post ? `?post=${post}` : null;

        getBlogData(service, params).then((response: any) => {
            dispatch({
                type: BLOG_DATA,
                result: response?.result,
                post: post,
            });
        });
        scrollToTop();
    }

    // loaders
    const routes = matches.map((m: any) => m.loaderData?.load).filter(Boolean);

    const loaders: Record<string, () => void> = {
        page: loadPageData,

        home: loadHomeData,
        home_featured: loadHomeFeaturedData,

        lab: loadLabData,
        lab_alerts: () => loadLabData('alerts'),
        lab_avatars: () => loadLabData('avatars'),
        lab_breadcrumbs: () => loadLabData('breadcrumbs'),
        lab_buttons: () => loadLabData('buttons'),
        lab_calendar: () => loadLabData('calendar'),
        lab_card: () => loadLabData('card'),
        lab_carousel: () => loadLabData('carousel'),
        lab_charts: () => loadLabData('charts'),

        icons: loadIconsData,

        blog: loadBlogData,
        post: () => {
            const post = matches.map((m: any) => m.loaderData?.post).filter(Boolean)[0];

            // check loaded posts
            if (post && !(state?.api?.blog && state.api.blog[post])) {
                loadBlogData(post);
            }
        }
    }

    const excludeFromCache = ['post']; // write your never cached routes

    for (const route of routes) {
        if (!cachedLoaders.includes(route)) {

            const handler = loaders[route];
            if (typeof handler === 'function') {

                handler();

                if (!excludeFromCache.includes(route)) {
                    cachedLoaders.push(route);
                }

            }

        };
    }

    // export state and actions
    const contextValue: StoreContextProps =  {
        ...state,
        setThemeA,
        setThemeB,
    }

    return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}