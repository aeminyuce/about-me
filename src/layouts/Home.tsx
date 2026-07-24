import React from 'react';
import { Outlet } from 'react-router';
import { Grid } from 'uilab';

// misc
import { useStoreContext } from '../stores/StoreContext';
import HomeSkeleton from '../skeleton/Home';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import MyFocus from '../components/home/MyFocus';
import HomeProfile from '../components/home/HomeProfile';
import HomeNav from '../components/home/HomeNav';

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
            {!home ?
                <HomeSkeleton />
                :
                <>
                <Grid.Container fixed='xl' as='div'>

                    {/* about me */}
                    {home?.aboutMe &&
                        <>
                        <HomeProfile />
                        <MyFocus />
                        </>
                    }

                </Grid.Container>

                {/* nav */}
                {home?.nav && <HomeNav />}
                </>
            }

            <Grid.Container fixed='xl' as='div'>

                {/* home contents */}
                <Outlet />

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    )
}