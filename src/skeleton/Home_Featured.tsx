import React from 'react';
import Grid from 'uilab/react/Grid';
import Skeleton from 'uilab/react/Skeleton';

export default function () {
    return (
        <Grid.Row className='ui-round-2nd'>

            <Grid.Col lg={2} size={3} md={6}>
                <Skeleton w='100%' h='410px' />
            </Grid.Col>

            <Grid.Col lg={3} size={4} md={6}>
                <Skeleton index={1} w='50%' h='129px' className='ui-round-l ui-m-20-b' />
                <Skeleton index={2} w='calc(50% - 1px)' h='129px' className='ui-m-1-l ui-m-20-b ui-round-r' />
                <Skeleton index={3} w='100%' h='261px' />
            </Grid.Col>

            <Grid.Col lg={3} size={5} md={6}>
                <Skeleton index={4} w='100%' h='304px' className='ui-m-20-b' />
                <Skeleton index={5} w='100%' h='86px' />
            </Grid.Col>

            <Grid.Col size={4} md={6}>
                <Skeleton index={6} w='100%' h='410px' />
            </Grid.Col>

            <Grid.Col lg={8} size={8} md={12}>
                <Skeleton index={7} w='100%' h='378px' />
            </Grid.Col>

            <Grid.Col size={4} md={6}>
                <Skeleton index={8} w='100%' h='378px' />
            </Grid.Col>

            <Grid.Col size={4} md={6}>
                <Skeleton index={9} repeat={2} vGap={20} w='100%' h='71px' />
                <Skeleton index={11} w='100%' h='213px' className='ui-m-20-t' />
            </Grid.Col>

            <Grid.Col lg={5} size={4} md={6}>
                <Skeleton index={12} w='100%' h='395px' />
            </Grid.Col>

            <Grid.Col lg={3} size={4} md={6}>
                <Skeleton index={13} w='100%' h='395px' />
            </Grid.Col>

        </Grid.Row>
    )
}