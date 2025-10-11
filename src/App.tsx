import * as React from 'react';
import TopButton from 'uilab/react/TopButton';

// utils
import { metaData } from './utils/MetaData';
import { storedData } from './utils/Storages';

// views
import StoreProvider from './views/StoreContext';
import Header from './views/Header';
import RoutePaths from './views/RoutePaths';
import Footer from './views/Footer';

export default function () {
    return (
        <StoreProvider initialValue={{ metaData, ...storedData }}>
            {/* header */}
            <Header />

            {/* routes */}
            <RoutePaths />

            {/* footer */}
            <Footer />

            {/* top button */}
            <TopButton />
        </StoreProvider>
    );
}
