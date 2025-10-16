import * as React from 'react';
import Grid from 'uilab/react/Grid';

export default function () {
    return (
        <Grid.Container as='footer' className='ui-border-t ui-border-light'>
            <Grid.Row fluid='no'>

                <Grid.Col size={12} className='ui-align-c'>
                    Copyright &copy;
                </Grid.Col>

            </Grid.Row>
        </Grid.Container>
    );
}