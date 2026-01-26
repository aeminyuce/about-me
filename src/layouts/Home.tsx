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
    const { api } = useStoreContext();
    const home = api?.home;

    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main' ariaLabel='Main site content' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

                {/* about me */}
                {home?.aboutMe && <AboutMe />}

                {/* nav */}
                {home?.nav && <HomeNav />}

                {/* home contents */}
                <Outlet />

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}