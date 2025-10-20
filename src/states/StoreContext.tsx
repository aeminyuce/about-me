import * as React from 'react';
import { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loadingmask from 'uilab/react/Loadingmask';
import Service from '../services/Service';
import { getPageData, getHomeData } from '../services/Repository';

// misc
import type { StoreContextProps, StoreProviderProps } from '../utils/Models';
import reducer from './StoreReducer';
import { CURRENT_THEME, PAGE_DATA, HOME_DATA } from './Actions';

export const StoreContext = createContext({} as StoreContextProps);

export default function StoreProvider(props: StoreProviderProps) {
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
        if (['/'].includes(pathname)) {
            if (!state?.apiResponse?.home) loadHomeData();

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

    const contextValue: StoreContextProps =  {
        ...state,
        isMobile,
        setTheme,
        loadHomeData,
    };

    return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>
};

export const useStoreContext = () => {
    return useContext(StoreContext);
};