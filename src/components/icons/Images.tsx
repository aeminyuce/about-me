import React from 'react';
import { Grid, Image } from 'uilab';

// misc
import { useStoreContext } from '../../stores/StoreContext';

export default function () {
    const { api } = useStoreContext();
    const info = api?.icons?.info;

    return (
        <Grid.Row fluid='sm' className='iconslist-images ui-m-auto ui-m-20-b ui-squircle-2nd ui-shadow-lg-2nd'>
            <Grid.Col size={6}>
                <Image fluid='all' fetchPriority='high' src={info?.image1} aspect='square' />
            </Grid.Col>
            <Grid.Col size={6}>
                <Image fluid='all' fetchPriority='high' src={info?.image2} aspect='square' />
            </Grid.Col>
        </Grid.Row>
    )
}