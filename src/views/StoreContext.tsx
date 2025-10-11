import * as React from 'react';
import { createContext, useContext, useReducer, useState, useEffect } from 'react';

// utils
import type { StoreContextProps, StoreProviderProps } from '../utils/Models';
import { reducer } from '../utils/StoreReducer';
import { CURRENT_THEME } from '../utils/Actions';

export const StoreContext = createContext({} as StoreContextProps);

export default function StoreProvider(props: StoreProviderProps) {

    const { children, initialValue } = props;
    const [state, dispatch] = useReducer(reducer, initialValue);

    const [isMobile, setIsmobile] = useState(false);

    useEffect(() => {
        setIsmobile(window.innerWidth < 768);
    }, []);

    // themes
    const setTheme = (name: string) => {
        dispatch({ type: CURRENT_THEME, theme: name })
    };

    const contextValue: StoreContextProps =  {
        ...state,
        isMobile,
        setTheme,
    };

    return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>
};

export const useStoreContext = () => {
    return useContext(StoreContext);
};