import React from 'react';
import Grid from '@ui/Grid';
import Skeleton from '@ui/Skeleton';

export default function () {
    return (
        <>
        <Grid.Container fixed='xl' as='div'>
            <Grid.Row fluid='sm' hGap='lg' className='ui-m-15-v'>

                <Grid.Col size={5} md={2} className='ui-align-r ui-sm-align-c'>
                    <Skeleton h='92px' aspect='square' className='ui-squircle' />
                </Grid.Col>

                <Grid.Col size={7} md={10} className='ui-sm-align-c ui-round-1st'>
                    <Skeleton clear index={1} w='186px' h='31px' className='ui-m-20-b' />
                    <Skeleton clear index={2} repeat={2} w='150px' h='18px' vGap={5} />

                    <Grid.Row fluid='sm' className='ui-m-15-b ui-m-10-t'>

                        <Grid.Col xl={8} lg={8} size={10} className='ui-round-1st'>
                            <Skeleton index={4} w='100%' h='18px' className='ui-m-5-v ui-hide-md' />
                            <div className='ui-round-1st ui-shown-md'>
                                <Skeleton index={5} repeat={2} w='100%' h='18px' vGap={5} className='ui-m-5-t' />
                            </div>
                            <Skeleton index={7} w='60%' h='18px' className='ui-m-10-t ui-m-5-b' />
                        </Grid.Col>

                    </Grid.Row>

                    <Skeleton index={8} w='172px' h='48px' className='ui-circle' />
                </Grid.Col>

            </Grid.Row>
            <Grid.Row>

                <Grid.Col size={8} push={2} className='ui-m-30-v ui-align-c ui-round-2nd'>
                    <div className='ui-p-1-t ui-hide-md'>
                        <Skeleton index={9} w='100%' h='22px' className='ui-m-5-v' />
                        <Skeleton index={10} w='86%' h='22px' className='ui-m-5-t ui-m-20-b' />
                    </div>
                    <div className='ui-shown-md'>
                        <Skeleton index={9} repeat={5} w='100%' h='20px' vGap={5} className='ui-m-5-t' />
                        <Skeleton index={14} w='86%' h='20px' className='ui-m-10-t ui-m-20-b' />
                    </div>
                </Grid.Col>

            </Grid.Row>
        </Grid.Container>

        <Grid.Row className='ui-p-15-h ui-no-m-h ui-m-15-b'>
            <Grid.Static fluid='no'>
                <Grid.Row >

                    <Grid.Col size={12} className='ui-hide-sm ui-round-1st'>
                        <Skeleton repeat={5} w='103px' h='42px' hGap={2} />
                    </Grid.Col>

                    <Grid.Col size={12} className='ui-shown-sm ui-round-2nd'>
                        <div className='ui-hide-xs'>
                            <Skeleton repeat={3} w='calc(33% - 3px)' h='42px' hGap={3} />
                        </div>
                        <div className='ui-shown-xs'>
                            <Skeleton repeat={2} w='calc(50% - 3px)' h='42px' hGap={3} />
                        </div>
                    </Grid.Col>

                </Grid.Row>

                <Grid.Col size={85} className='ui-p-10-v'>
                    <Skeleton w='37px' h='42px' className='ui-round-l' />
                    <Skeleton index={1} w='37px' h='42px' className='ui-m-1-l ui-round-r' />
                </Grid.Col>

            </Grid.Static>
        </Grid.Row>
        </>
    )
}