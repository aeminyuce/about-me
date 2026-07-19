import React from 'react';
import Grid from 'uilab/react/Grid';
import Skeleton from 'uilab/react/Skeleton';

export default function () {
    return (
        <Grid.Container as='div'>
            <Grid.Row fluid='no' className='ui-round-2nd'>

                <Grid.Col size={9} md={3} sm={3} xs={3}>
                    <Skeleton repeat={5} w='92px' h='42px' hGap={2} className='ui-hidden-md' />
                    <Skeleton square h='42px' hGap={2} className='ui-visible-md' />
                </Grid.Col>

                <Grid.Col size={3} md={9} sm={9} xs={9} className='ui-align-r'>
                    <Skeleton square repeat={5} h='42px' hGap={1} />
                    <Skeleton index={5} square h='42px' hGap={2} className='ui-m-1-l ui-visible-md' />
                </Grid.Col>

            </Grid.Row>
        </Grid.Container>
    )
}