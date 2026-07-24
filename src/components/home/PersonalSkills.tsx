import React from 'react';
import { Button, Grid } from 'uilab';

// misc
import { useStoreContext } from '../../stores/StoreContext';

export default function () {
    const { api } = useStoreContext();

    return (
        <Grid.Row fluid='sm' className='ui-m-15-b ui-m-10-t'>
            <Grid.Col xl={8} lg={8} size={10} className='ui-round-1st'>

                {api?.home?.aboutMe?.personalSkills?.map((name: string) => (
                    <Button noease as='span' size='xs' key={name} className='ui-m-1'>
                        {name}
                    </Button>
                ))}

            </Grid.Col>
        </Grid.Row>
    )
}