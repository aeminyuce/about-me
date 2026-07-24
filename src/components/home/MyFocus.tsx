import React from 'react';
import { Grid } from 'uilab';

// misc
import { useStoreContext } from '../../stores/StoreContext';

export default function () {
    const { api } = useStoreContext();

    return (
        <Grid.Row>
            <Grid.Col size={8} push={2} className='ui-m-30-v ui-align-c'>
                <p className='ui-font-lead ui-color-black-25 ui-font-readable'>
                    {api?.home?.aboutMe?.myFocus}
                </p>
            </Grid.Col>
        </Grid.Row>
    )
}