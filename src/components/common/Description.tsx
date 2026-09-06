import Grid from '@ui/Grid';
import Item from '@ui/Item';

// misc
import type { DescriptionProps } from '@models/Page';

export default function (props: DescriptionProps) {
    const { children } = props;

    return (
        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <Item as='p' className='ui-color-black-50 ui-font-18 ui-font-relax ui-m-10-b'>
                    {children}
                </Item>
            </Grid.Col>
        </Grid.Row>
    )
}
