import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import { Reports, ReportsList } from '../../components/home/featured/Reports';
import { People, PeopleMore } from '../../components/home/featured/People';
import Profile from '../../components/home/featured/Profile';
import Race from '../../components/home/featured/Race';
import Events from '../../components/home/featured/Events';

// styles
import '../../assets/home/featured.less';

export default function () {
    const { api } = useStoreContext();
    const homeFeatured = api?.home_featured;

    const reports = homeFeatured?.reports;
    const reportsList = homeFeatured?.reportsList;

    return (
        <Grid.Row>
            <Grid.Col lg={2} size={4} md={6}>

                {homeFeatured?.profile && <Profile />}

            </Grid.Col>
            <Grid.Col lg={3} size={4} md={6}>

                {(reports?.l && reports?.r) && <Reports />}
                {(reportsList?.delayed && reportsList?.paused) && <ReportsList />}

            </Grid.Col>
            <Grid.Col lg={3} size={4} md={6}>

                {homeFeatured?.people?.list && <People />}
                {homeFeatured?.peopleMore?.list && <PeopleMore />}
                {homeFeatured?.race && <Race />}

            </Grid.Col>
            <Grid.Col lg={4} size={4} md={6}>

                {homeFeatured?.calendar && <Events />}

            </Grid.Col>
        </Grid.Row>
    );
}