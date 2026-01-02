import * as React from 'react';
import { Outlet } from "react-router-dom";
import Grid from 'uilab/react/Grid';

// misc
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AboutMe from '../components/home/AboutMe';
import HomeNav from '../components/home/HomeNav';
import { useStoreContext } from '../states/StoreContext';

// styles
import '../assets/home.less';

export default function () {
    const { apiResponse } = useStoreContext();

    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

                {/* about me */}
                {apiResponse?.home?.aboutMe && <AboutMe />}

                {/* nav */}
                {apiResponse?.home?.nav && <HomeNav />}

                {/* home contents */}
                <Outlet />

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}