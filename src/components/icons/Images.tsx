import * as React from 'react';
import Grid from 'uilab/react/Grid';
import Image from 'uilab/react/Image';

// misc
import { useStoreContext } from '../../stores/StoreContext';

export default function () {
    const { api } = useStoreContext();
    const info = api?.icons?.info;

    return (
        <Grid.Row fluid='sm' className='iconslist-images ui-m-auto ui-m-20-b ui-round-more-2nd ui-shadow-lg-2nd'>
            <Grid.Col size={6}>
                <Image fluid fetchPriority='high' src={info?.image1} aspect='square' />
            </Grid.Col>
            <Grid.Col size={6}>
                <Image fluid fetchPriority='high' src={info?.image2} aspect='square' />
            </Grid.Col>
        </Grid.Row>
    )
}