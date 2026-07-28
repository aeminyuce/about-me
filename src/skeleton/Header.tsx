import React from 'react';
import { useLocation } from 'react-router';
import Grid from '@ui/Grid';
import Skeleton from '@ui/Skeleton';

export default function () {
    const { pathname } = useLocation();
    const showRightSidebar = pathname.startsWith('/lab');

    return (
        <Grid.Container as='div'>
            <Grid.Row fluid='no'>

                <Grid.Col size={9} md={3} sm={3} xs={3}>
                    <div className='ui-round-1st ui-hidden-md'>
                        <Skeleton repeat={5} w='92px' h='42px' hGap={2} />
                    </div>
                    <Skeleton h='42px' aspect='square' className='ui-round ui-visible-md' />
                </Grid.Col>

                <Grid.Col size={3} md={9} sm={9} xs={9} className='ui-align-r ui-round-1st'>
                    <Skeleton repeat={5} h='42px' hGap={1} aspect='square' />
                    {showRightSidebar &&
                        <Skeleton index={4} h='42px' aspect='square' className='ui-m-1-l ui-visible-md' />
                    }
                </Grid.Col>

            </Grid.Row>
        </Grid.Container>
    )
}