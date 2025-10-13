import * as React from 'react';
import TopButton from 'uilab/react/TopButton';

// utils
import { metaData } from './utils/MetaData';
import { storedData } from './utils/Storages';

// views
import StoreProvider from './views/StoreContext';
import RoutePaths from './views/RoutePaths';

export default function () {
    return (
        <StoreProvider initialValue={{ metaData, ...storedData }}>

            {/* routes */}
            <RoutePaths />

            {/* top button */}
            <TopButton />

        </StoreProvider>
    );
}
