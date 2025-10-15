import * as React from 'react';
import { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loadingmask from 'uilab/react/Loadingmask';
import Service from '../services/Service';
import { getPageData, getCalendarData } from '../services/Repository';

// utils
import type { StoreContextProps, StoreProviderProps } from '../utils/Models';
import reducer from '../utils/StoreReducer';
import { CURRENT_THEME, PAGE_DATA, CALENDAR_DATA } from '../utils/Actions';

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
            if (!state?.apiResponse?.calendar) loadCalendarData();

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

    // fetch calendar data
    const loadCalendarData = () => {
        getCalendarData(service).then((response: any) => {
            dispatch({
                type: CALENDAR_DATA,
                result: response?.result,
            });
        });
    };

    const contextValue: StoreContextProps =  {
        ...state,
        isMobile,
        setTheme,
        loadCalendarData,
    };

    return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>
};

export const useStoreContext = () => {
    return useContext(StoreContext);
};