import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import AboutMe from '../components/common/AboutMe';
import Header from '../components/common/Header';
import HomeNav from '../components/home/HomeNav';
import Footer from '../components/common/Footer';
import { useStoreContext } from '../states/StoreContext';
import Profile from '../components/home/Profile';
import { Reports, ReportsList } from '../components/home/Reports';
import { People, PeopleMore } from '../components/home/People';
import Events from '../components/home/Events';

// styles
import '../assets/home.less';

export default function () {
    const { theme, apiResponse } = useStoreContext();

    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

                {/* about me */}
                <AboutMe />

                {/* nav */}
                <HomeNav />

                {/* featured */}
                {apiResponse?.home &&
                    <Grid.Row className={theme ? ` ${theme}` : null}>
                        <Grid.Col lg={2} size={4} md={6}>

                            {apiResponse?.home?.profile && <Profile />}

                        </Grid.Col>
                        <Grid.Col lg={3} size={4} md={6}>

                            {(apiResponse?.home?.reports?.l || apiResponse?.home?.reports?.r) && <Reports />}
                            {(apiResponse?.home?.reportsList?.delayed || apiResponse?.home?.reportsList?.paused) && <ReportsList />}

                        </Grid.Col>
                        <Grid.Col lg={3} size={4} md={6}>

                            {apiResponse?.home?.people?.list && <People />}
                            {apiResponse?.home?.peopleMore?.list && <PeopleMore />}

                        </Grid.Col>
                        <Grid.Col lg={4} size={4} md={6}>

                            {apiResponse?.home?.calendar && <Events />}

                        </Grid.Col>
                    </Grid.Row>
                }

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}