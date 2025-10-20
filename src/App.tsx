import * as React from 'react';
import TopButton from 'uilab/react/TopButton';

// misc
import { metaData } from './utils/MetaData';
import { storedData } from './states/Storages';
import StoreProvider from './states/StoreContext';
import Router from './pages/Router';

export default function () {
    return (
        <StoreProvider initialValue={{ metaData, ...storedData }}>

            {/* pages */}
            <Router />

            {/* top button */}
            <TopButton />

        </StoreProvider>
    );
}
