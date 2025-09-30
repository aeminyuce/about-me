import * as React from 'react';
import Grid from 'uilab/react/Grid';

// layouts
import AboutMe from './layouts/AboutMe';
import Nav from './layouts/Nav';

export default function () {
    return (
        <Grid.Container as='main'>
            <Grid.Container fixed='xl' as='div' noGutter='lg'>

                {/* about me */}
                <AboutMe />

                {/* nav */}
                <Nav />

            </Grid.Container>
        </Grid.Container>
    );
}
