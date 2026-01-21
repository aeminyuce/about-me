import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import type { DescriptionProps } from '../../models/Page';

export default function (props: DescriptionProps) {
    const { children } = props;

    return (
        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable ui-sm-align-c'>
                    {children}
                </p>
            </Grid.Col>
        </Grid.Row>
    );
}
