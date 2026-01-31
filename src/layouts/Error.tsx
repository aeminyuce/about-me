import * as React from 'react';
import { Outlet } from "react-router-dom";
import Grid from 'uilab/react/Grid';

// misc
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function () {
    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main' ariaLabel='Main site content' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

                {/* error pages */}
                <Outlet />

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}