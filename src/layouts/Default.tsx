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
        <Grid.Container as='main' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

                {/* contents */}
                <Outlet />

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}