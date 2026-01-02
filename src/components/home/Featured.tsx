import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';
import Profile from '../home/Profile';
import { Reports, ReportsList } from '../home/Reports';
import { People, PeopleMore } from '../home/People';
import Events from '../home/Events';

// styles
import '../../assets/home/featured.less';

export default function () {
    const { theme, apiResponse } = useStoreContext();

    return (
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
    );
}