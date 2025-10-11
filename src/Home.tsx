import * as React from 'react';
import Calendar from 'uilab/react/Calendar';
import Grid from 'uilab/react/Grid';

// views
import AboutMe from './views/AboutMe';
import Nav from './views/Nav';

// utils
import { useStoreContext } from './views/StoreContext';

export default function () {
    const { theme } = useStoreContext();

    return (
        <Grid.Container as='main'>
            <Grid.Container fixed='xl' as='div' noGutter='lg'>

                {/* about me */}
                <AboutMe />

                {/* nav */}
                <Nav />

                <Grid.Row>
                    <Grid.Col size={3}>
                        1
                    </Grid.Col>
                    <Grid.Col size={3}>
                        2
                    </Grid.Col>
                    <Grid.Col size={3}>
                        <Calendar className={`ui-round ui-shadow-sm${theme ? ` ${theme}` : ''}`} />
                    </Grid.Col>
                    <Grid.Col size={3}>
                        4
                    </Grid.Col>
                </Grid.Row>

            </Grid.Container>
        </Grid.Container>
    );
}
