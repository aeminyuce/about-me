import * as React from 'react';
import { useReducer, useEffect } from 'react';

// utils
import type { StoreProviderProps } from '../utils/Models';
import { StoreContext, StoreReducer, StoreInitials } from '../utils/StoreReducer';

export default function StoreProvider(props:StoreProviderProps) {

    const { children } = props;
    const [store, setStore] = useReducer(StoreReducer, StoreInitials);

    // useEffect(() => {
    //     console.log('Store updated!', store);
    // }, [store]);

    return (
        <StoreContext.Provider value={{ store, setStore }}>
            {children}
        </StoreContext.Provider>
    );
}
