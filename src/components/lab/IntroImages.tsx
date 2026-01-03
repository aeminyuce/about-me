import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';

export default function IntroImages() {
    const { apiResponse } = useStoreContext();

    return (
        <Grid.Row fluid='no' gap='sm' className='images ui-m-auto ui-m-30-b ui-round-2nd ui-shadow-2nd'>

            {apiResponse?.lab?.intro?.images.map((path: string) => (
                <Grid.Col key={path} size={'7x'}>
                    <img className='ui-img-fluid' src={path} />
                </Grid.Col>
            ))}

        </Grid.Row>
    )
}