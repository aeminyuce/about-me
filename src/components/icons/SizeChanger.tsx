import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import type { SizeListProps } from '../../models/Icons';

export default function () {
    const { iconSize, setIconSize, api } = useStoreContext();
    const sizes = api?.icons?.sizes;

    return (
        <Grid.Row>
            <Grid.Col size={4} offset={4}>
                <Button.Wrapper as='div' type='holder' largeButtons ease='1st' className='ui-theme-purpleBlue'>

                    {sizes?.map((item: SizeListProps) => {
                        const classes = `ui-round${item.size === iconSize ? ' ui-fill-dark-100' : ''}`;

                        return (
                            <Button key={item.name} noease className={classes} data={{ 'size': item.size  }} onClick={() => setIconSize(item.size)}>
                                {item.name}
                            </Button>
                        )
                    })}

                </Button.Wrapper>
            </Grid.Col>
        </Grid.Row>
    )
}