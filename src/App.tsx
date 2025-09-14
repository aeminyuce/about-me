import * as React from 'react';
import TopButton from 'uilab/react/TopButton';

// layouts
import Header from './layouts/Header';
import RoutePaths from './layouts/RoutePaths';


export default function () {
    return (
        <>
            {/* header */}
            <Header />

            {/* routes */}
            <RoutePaths />

            {/* top button */}
            <TopButton />
        </>
    );
}
