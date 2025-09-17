import * as React from 'react';
import TopButton from 'uilab/react/TopButton';

// layouts
import Header from './layouts/Header';
import RoutePaths from './layouts/RoutePaths';
import Footer from './layouts/Footer';

export default function () {
    return (
        <>
        {/* header */}
        <Header />

        {/* routes */}
        <RoutePaths />

        {/* footer */}
        <Footer />

        {/* top button */}
        <TopButton />
        </>
    );
}
