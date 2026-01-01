import * as React from 'react';
import { useOutlet } from "react-router-dom";
import Grid from 'uilab/react/Grid';

// misc
import AboutMe from '../components/common/AboutMe';
import HomeNav from '../components/home/HomeNav';
import { useStoreContext } from '../states/StoreContext';
import Profile from '../components/home/Profile';
import { Reports, ReportsList } from '../components/home/Reports';
import { People, PeopleMore } from '../components/home/People';
import Events from '../components/home/Events';

// styles
import '../assets/home.less';

export default function () {
    const outlet = useOutlet();
    const { theme, apiResponse } = useStoreContext();

    return (
        <>
        {/* about me */}
        <AboutMe />

        {/* nav */}
        <HomeNav />

        {/* contents */}
        {outlet}

        {/* featured */}
        {!outlet && apiResponse?.home &&
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
        </>
    );
}