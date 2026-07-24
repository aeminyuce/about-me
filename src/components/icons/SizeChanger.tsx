import React from 'react';
import { Button, Grid } from 'uilab';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import type { SizeListProps } from '../../models/Icons';
import { changeIconsSize } from '../../helpers/Icons';

export default function () {
    const { api } = useStoreContext();

    return (
        <Grid.Row>
            <Grid.Col size={4} offset={4}>
                <Button.Wrapper as='div' type='holder' largeButtons ease='1st' className='iconslist-tabs ui-round-1st ui-theme-purpleBlue'>

                    {api?.icons?.sizes?.map((item: SizeListProps) => {
                        const classes = item.size === 'xl' ? ' ui-fill-dark-100' : undefined;

                        return (
                            <Button key={item.name} noease className={classes} data={{ 'size': item.size  }} onClick={() => changeIconsSize(item.size)}>
                                {item.name}
                            </Button>
                        )
                    })}

                </Button.Wrapper>
            </Grid.Col>
        </Grid.Row>
    )
}