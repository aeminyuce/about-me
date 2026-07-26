import React from 'react';
import Grid from 'uilab/react/Grid';
import Skeleton from 'uilab/react/Skeleton';

export default function () {
    return (
        <Grid.Static fluid='sm'>
            <Grid.Row gap='no'>
                <Grid.Col size={12}>
                    <Skeleton square w='100%' h='500px' className='ui-round' />
                </Grid.Col>
            </Grid.Row>
            <Grid.Col size={400} order={{ when: 'sm', pos: 'first' }} className='ui-p-30 ui-no-p-r ui-sm-no-p-l ui-sm-no-p-t'>
                <Skeleton index={1} w='100%' h='30px' className='ui-m-20-b ui-round' />
                <div className='ui-m-30-v ui-round-1st'>
                    <Skeleton index={2} repeat={7} w='100%' h='24px' vGap={10} />
                </div>
                <Skeleton index={9} w='100%' h='42px' className='ui-round' />
            </Grid.Col>
        </Grid.Static>
    )
}