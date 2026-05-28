import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import { Reports, ReportsList } from '../../components/home/featured/Reports';
import { People, PeopleMore } from '../../components/home/featured/People';
import Profile from '../../components/home/featured/Profile';
import Events from '../../components/home/featured/Events';
import Foods from '../../components/home/featured/Foods';
import Race from '../../components/home/featured/Race';
import Travel from '../../components/home/featured/Travel';
import Alerts from '../../components/home/featured/Alerts';

// styles
import '../../assets/home/featured.less';

export default function () {
    const { api } = useStoreContext();
    const homeFeatured = api?.home_featured;

    const reports = homeFeatured?.reports;
    const reportsList = homeFeatured?.reportsList;

    return (
        <>
        <Grid.Row>
            <Grid.Col lg={2} size={3} md={6}>

                {homeFeatured?.profile && <Profile />}

            </Grid.Col>
            <Grid.Col lg={3} size={4} md={6}>

                {(reports?.l && reports?.r) && <Reports />}
                {(reportsList?.delayed && reportsList?.paused) && <ReportsList />}

            </Grid.Col>
            <Grid.Col lg={3} size={5} md={6}>

                {homeFeatured?.people?.list && <People />}
                {homeFeatured?.peopleMore?.list && <PeopleMore />}

            </Grid.Col>
            <Grid.Col size={4} md={6}>

                {homeFeatured?.calendar && <Events />}

            </Grid.Col>
            <Grid.Col lg={8} size={8} md={12}>

                {homeFeatured?.travel && <Travel />}

            </Grid.Col>
            <Grid.Col size={4} md={6}>

                ...

            </Grid.Col>
            <Grid.Col size={4} md={6}>

                {homeFeatured?.alerts && <Alerts />}
                {homeFeatured?.foods && <Foods />}

            </Grid.Col>
            <Grid.Col lg={5} size={4} md={6}>

                ...

            </Grid.Col>
            <Grid.Col lg={3} size={4} md={6}>

                {homeFeatured?.race && <Race />}

            </Grid.Col>
        </Grid.Row>
        </>
    );
}