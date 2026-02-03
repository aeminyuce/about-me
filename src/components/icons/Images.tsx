import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';
import GetImage from '../../components/common/GetImage';


export default function () {
    const { api } = useStoreContext();

    const info = api?.icons?.info;
    const image1 = info?.image1;
    const image2 = info?.image2;

    return (
        <Grid.Row fluid='sm' className='iconslist-images ui-m-auto ui-m-20-b ui-round-more-2nd'>
            <Grid.Col size={6}>
                <GetImage src={image1} className='ui-img-fluid ui-border' />
            </Grid.Col>
            <Grid.Col size={6}>
                <GetImage src={image2} className='ui-img-fluid ui-border' />
            </Grid.Col>
        </Grid.Row>
    )
}