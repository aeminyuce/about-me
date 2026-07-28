import React from 'react';
import Grid from '@ui/Grid';
import Skeleton from '@ui/Skeleton';

export default function () {
    return (
        <Grid.Row className='ui-sm-no-p ui-align-c ui-p-30-v'>
            <Grid.Col size={12}>

                <Skeleton clear h='92px' aspect='square' className='ui-squircle' />

                <Skeleton index={1} w='80%' h='48px' className='ui-m-30-v ui-round ui-hidden-sm' />
                <div className='ui-p-1-b ui-m-30-v ui-round-1st ui-visible-sm'>
                    <Skeleton index={1} repeat={3} w='96%' h='45px' vGap={5} />
                </div>

                <Grid.Row fluid='sm' className='iconslist-images ui-m-auto ui-m-20-b ui-squircle-2nd'>
                    <Grid.Col size={6}>
                        <Skeleton index={4} aspect='square' />
                    </Grid.Col>

                    <Grid.Col size={6}>
                        <Skeleton index={5} aspect='square' />
                    </Grid.Col>
                </Grid.Row>

                <div className='ui-m-25-b ui-round-1st ui-hidden-md'>
                    <Skeleton index={6} w='96%' h='29px' className='ui-m-15-b' />
                    <Skeleton index={7} w='60%' h='29px' />
                </div>
                <div className='ui-p-3-b ui-m-25-b ui-visible-md ui-round-1st'>
                    <Skeleton index={6} repeat={5} w='96%' h='24px' vGap={15} />
                </div>

                <div className='ui-m-20-b ui-round-1st'>
                    <Skeleton index={11} w='40%' h='27px' className='ui-hidden-md' />
                    <Skeleton index={11} w='80%' h='27px' className='ui-visible-md' />
                </div>

                <Grid.Row className='ui-m-30-b'>
                    <Grid.Col size={4} offset={4}>
                        <Skeleton index={12} w='100%' h='48px' className='ui-m-20-b ui-round' />
                    </Grid.Col>
                </Grid.Row>

                <div className='ui-p-30-t ui-m-20-b ui-round-1st'>
                    <Skeleton index={12} w='30%' h='27px' className='ui-hidden-md' />
                    <Skeleton index={12} w='80%' h='27px' className='ui-visible-md' />
                </div>
                <div className='ui-p-30-b ui-round-1st'>
                    <Skeleton index={13} repeat={5} w='172px' h='81px' gap={1} />
                </div>

                <div className='ui-p-30-t ui-m-20-b ui-round-1st'>
                    <Skeleton index={17} w='30%' h='27px' className='ui-hidden-md' />
                    <Skeleton index={17} w='80%' h='27px' className='ui-visible-md' />
                </div>
                <div className='ui-p-30-b ui-round-1st'>
                    <Skeleton index={18} repeat={19} w='172px' h='81px' gap={1} />
                </div>

                <div className='ui-p-30-t ui-m-20-b ui-round-1st'>
                    <Skeleton index={38} w='30%' h='27px' className='ui-hidden-md' />
                    <Skeleton index={38} w='80%' h='27px' className='ui-visible-md' />
                </div>
                <div className='ui-p-30-b ui-round-1st'>
                    <Skeleton index={39} repeat={27} w='172px' h='81px' gap={1} />
                </div>
            </Grid.Col>
        </Grid.Row>
    )
}