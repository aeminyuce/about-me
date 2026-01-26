import * as React from 'react';
import { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loadingmask from 'uilab/react/Loadingmask';
import Service from '../services/Service';
import { getPageData, getHomeData, getHomeFeaturedData, getLabData } from '../services/Repository';

// misc
import type { StoreContextProps, StoreProviderProps } from '../models/Page';
import reducer from './StoreReducer';
import { CURRENT_THEME, PAGE_DATA, HOME_DATA, HOME_FEATURED_DATA, LAB_DATA } from './Actions';

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

        } else Loadingmask();
    }, [pathname]);

    // themes
    const setTheme = (name: string) => {
        dispatch({
            type: CURRENT_THEME,
            theme: name,
        });
    };

    // fetch page data
    const loadPageData = () => {
        getPageData(service).then((response: any) => {
            dispatch({
                type: PAGE_DATA,
                result: response?.result,
            });
        });
    };

    // fetch home data
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

    // fetch lab data
    const loadLabData = () => {
        getLabData(service).then((response: any) => {
            dispatch({
                type: LAB_DATA,
                result: response?.result,
            });
        });
    };

    const contextValue: StoreContextProps =  {
        ...state,
        isMobile,
        setTheme,
        loadHomeData,
        loadHomeFeaturedData,
        loadLabData,
    };

    return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>
};

export const useStoreContext = () => {
    return useContext(StoreContext);
};