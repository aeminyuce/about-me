import React from 'react';
import Grid from '@ui/Grid';
import Item from '@ui/Item';

// misc
import type { DescriptionProps } from '@models/Page';

export default function (props: DescriptionProps) {
    const { children } = props;

    return (
        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <Item as='p' className='ui-font-16 ui-color-black-50 ui-font-readable ui-sm-align-c'>
                    {children}
                </Item>
            </Grid.Col>
        </Grid.Row>
    )
}
