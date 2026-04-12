import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Grid from 'uilab/react/Grid';

export default function () {
    return (
        <Grid.Container as='main' ariaLabel='Main site content' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

                {/* error pages */}
                <Outlet />

            </Grid.Container>
        </Grid.Container>
    );
}