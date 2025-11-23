import * as React from 'react';
import { Fragment } from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';

export default function () {
    const { apiResponse } = useStoreContext();

    return (
        <Grid.Row>
            <Grid.Col size={6} push={3} className='ui-m-30-b'>
                <p className='ui-color-black-25 ui-font-15 ui-align-c'>

                    {apiResponse?.aboutMe?.personalSkills.map((name: string, index: number, arr: string[]) => {
                        const item = `${name}${index + 1 !== arr.length ? ', ' : ''}`;
                        return <Fragment key={name}>{item}</Fragment>
                    })}

                </p>
            </Grid.Col>
        </Grid.Row>
    )
}