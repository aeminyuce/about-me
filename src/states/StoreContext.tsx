import * as React from 'react';
import { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loadingmask from 'uilab/react/Loadingmask';
import Service from '../services/Service';
import { getPageData, getHomeData, getHomeFeaturedData, getLabData, getIconsData } from '../services/Repository';

// misc
import type { StoreContextProps, StoreProviderProps } from '../models/Page';
import reducer from './StoreReducer';
import {

	// state
	CURRENT_THEME, ICON_SIZE,

	// data
	PAGE_DATA, HOME_DATA, HOME_FEATURED_DATA, LAB_DATA, ICONS_DATA

} from './Actions';

export const StoreContext = createContext({} as StoreContextProps);

export default function (props: StoreProviderProps) {
    const { children, initialValue } = props;

    const service = new Service();
    const { pathname } = useLocation();

    const [state, dispatch] = useReducer(reducer, initialValue);
    const [isMobile, setIsmobile] = useState(false);

    useEffect(() => {
        // load page data from api when set your api urls
        loadPageData();
    }, []);

    useEffect(() => {
        setIsmobile(window.innerWidth < 768);

        // route based data
        if (['/', '/dashboard'].includes(pathname) && !state?.api?.home) {
            loadHomeData();
        }

        if (pathname === '/' && !state?.api?.home_featured) {
            loadHomeFeaturedData();

        } else if (pathname.startsWith('/lab') && !state?.api?.lab) {
            loadLabData();

        } else if (pathname.startsWith('/icons') && !state?.api?.icons) {
            loadIconsData();

        } else Loadingmask();
    }, [pathname]);

    // themes
    const setTheme = (name: string) => {
        dispatch({
            type: CURRENT_THEME,
            theme: name,
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
    const loadLabData = () => {
        getLabData(service).then((response: any) => {
            dispatch({
                type: LAB_DATA,
                result: response?.result,
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

    const contextValue: StoreContextProps =  {
        ...state,
        isMobile,

        // state
        setTheme,
        setIconSize,

        // data
        loadHomeData,
        loadHomeFeaturedData,
        loadLabData,
        loadIconsData,
    };

    return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>
};

export const useStoreContext = () => {
    return useContext(StoreContext);
};