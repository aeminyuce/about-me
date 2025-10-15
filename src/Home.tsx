import * as React from 'react';
import Calendar from 'uilab/react/Calendar';
import Grid from 'uilab/react/Grid';

// views
import AboutMe from './views/AboutMe';
import Header from './views/Header';
import Nav from './views/Nav';
import Footer from './views/Footer';

// utils
import { useStoreContext } from './views/StoreContext';

export default function () {
    const { theme, apiResponse } = useStoreContext();
    const calendarData = apiResponse?.calendar;

    return (
        <>
            {/* header */}
            <Header />

            {/* main */}
            <Grid.Container as='main'>
                <Grid.Container fixed='xl' as='div' noGutter='lg'>

                    {/* about me */}
                    <AboutMe />

                    {/* nav */}
                    <Nav />

                    <Grid.Row>
                        <Grid.Col size={4}>
                            ...
                        </Grid.Col>
                        <Grid.Col size={3}>
                            ...
                        </Grid.Col>
                        <Grid.Col size={5}>
                            <Calendar className={`ui-round ui-shadow-sm${theme ? ` ${theme} ui-fill-dark-100` : ''}`} data={{ date: calendarData?.eventsDate, json: JSON.stringify(calendarData?.events) }} />
                        </Grid.Col>
                    </Grid.Row>

                </Grid.Container>
            </Grid.Container>

            {/* footer */}
            <Footer />
        </>
    );
}
