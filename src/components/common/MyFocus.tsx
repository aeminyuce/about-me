import * as React from 'react';
import { Fragment } from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';

export default function () {
    const { apiResponse } = useStoreContext();

    return (
        <Grid.Row>
            <Grid.Col size={8} push={2} className='ui-m-30-b'>
                <p className='ui-font-16 ui-font-readable ui-align-c'>
                    {apiResponse?.aboutMe?.myFocus}
                </p>
            </Grid.Col>
        </Grid.Row>
    )
}