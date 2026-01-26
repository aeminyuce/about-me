import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';
import Profile from '../../components/home/featured/Profile';
import { Reports, ReportsList } from '../../components/home/featured/Reports';
import Nav from '../../components/home/featured/Nav';
import { People, PeopleMore } from '../../components/home/featured/People';
import Events from '../../components/home/featured/Events';

// styles
import '../../assets/home/featured.less';

export default function () {
    const { theme, api } = useStoreContext();
    const homeFeatured = api?.home_featured;

    const nav = homeFeatured?.nav;
    const reports = homeFeatured?.reports;
    const reportsList = homeFeatured?.reportsList;

    return (
        <Grid.Row className={theme ? ` ${theme}` : null}>
            <Grid.Col lg={2} size={4} md={6}>

                {homeFeatured?.profile && <Profile />}

            </Grid.Col>
            <Grid.Col lg={3} size={4} md={6}>

                {nav?.item1 && nav?.item2 && nav?.item3 && <Nav />}
                {(reports?.l && reports?.r) && <Reports />}
                {(reportsList?.delayed && reportsList?.paused) && <ReportsList />}

            </Grid.Col>
            <Grid.Col lg={3} size={4} md={6}>

                {homeFeatured?.people?.list && <People />}
                {homeFeatured?.peopleMore?.list && <PeopleMore />}

            </Grid.Col>
            <Grid.Col lg={4} size={4} md={6}>

                {homeFeatured?.calendar && <Events />}

            </Grid.Col>
        </Grid.Row>
    );
}