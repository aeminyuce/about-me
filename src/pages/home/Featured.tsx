import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';
import Profile from '../../components/home/featured/Profile';
import { Reports, ReportsList } from '../../components/home/featured/Reports';
import { People, PeopleMore } from '../../components/home/featured/People';
import Events from '../../components/home/featured/Events';

// styles
import '../../assets/home/featured.less';

export default function () {
    const { theme, apiResponse } = useStoreContext();

    return (
        <Grid.Row className={theme ? ` ${theme}` : null}>
            <Grid.Col lg={2} size={4} md={6}>

                {apiResponse?.home_featured?.profile && <Profile />}

            </Grid.Col>
            <Grid.Col lg={3} size={4} md={6}>

                {(apiResponse?.home_featured?.reports?.l || apiResponse?.home_featured?.reports?.r) && <Reports />}
                {(apiResponse?.home_featured?.reportsList?.delayed || apiResponse?.home_featured?.reportsList?.paused) && <ReportsList />}

            </Grid.Col>
            <Grid.Col lg={3} size={4} md={6}>

                {apiResponse?.home_featured?.people?.list && <People />}
                {apiResponse?.home_featured?.peopleMore?.list && <PeopleMore />}

            </Grid.Col>
            <Grid.Col lg={4} size={4} md={6}>

                {apiResponse?.home_featured?.calendar && <Events />}

            </Grid.Col>
        </Grid.Row>
    );
}