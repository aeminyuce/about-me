import * as React from 'react';
import TopButton from 'uilab/react/TopButton';

// misc
import { storedData } from './stores/Storages';
import StoreProvider from './stores/StoreContext';
import Router from './pages/Router';

export default function () {
    return (
        <StoreProvider initialValue={storedData}>

            {/* pages */}
            <Router />

            {/* top button */}
            <TopButton />

        </StoreProvider>
    );
}
