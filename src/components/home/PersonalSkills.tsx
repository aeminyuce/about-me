import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';

export default function () {
    const { api } = useStoreContext();
    const personalSkills = api?.home?.aboutMe?.personalSkills;

    return (
        <Grid.Row fluid='sm' className='ui-m-15-b ui-m-10-t'>
            <Grid.Col xl={8} lg={8} size={10}>

                {personalSkills.map((name: string) => (
                    <Button as='span' size='xs' key={name} className='ui-p-10-h ui-m-1 ui-round'>
                        {name}
                    </Button>
                ))}

            </Grid.Col>
        </Grid.Row>
    )
}