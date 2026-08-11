import React from 'react';
import Card from '@ui/Card';
import Grid from '@ui/Grid';
import Item from '@ui/Item';
import SvgIcon from '@ui/SvgIcon';

// misc
import { useStoreContext } from '@stores/StoreContext';

// assets
import { IconAlertShield } from '@icon/general/alert-shield';
import { IconCheckBadge } from '@icon/general/check-badge';

export default function () {
    const { themeA, themeB, api } = useStoreContext();
    const alerts = api?.home_featured?.alerts;

    return (
        <>
            <Card closable className={`ui-round ${themeB} ui-fill-light-200`}>
                <Grid.Static fluid='no'>
                    <Grid.Col size={72} className='ui-set-relative'>
                        <Item as='span' className='ui-set-absolute ui-set-c'>
                            <SvgIcon as='js' src={IconCheckBadge} size='lg' animate='pop' className='ui-text' />
                        </Item>
                    </Grid.Col>
                    <Grid.Row gap='lg'>
                        <Grid.Col size={12} className='ui-p-25-v ui-no-p-l'>
                            <Item as='p' className='ui-font-ellipsis'>{alerts?.alertSuccess}</Item>
                        </Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Card>

            <Card closable className={`ui-round ${themeA} ui-fill-light-200`}>
                <Grid.Static fluid='no'>
                    <Grid.Col size={72} className='ui-set-relative'>
                        <Item as='span' className='ui-set-absolute ui-set-c'>
                            <SvgIcon as='js' src={IconAlertShield} size='lg' animate='pop' className='ui-text' />
                        </Item>
                    </Grid.Col>
                    <Grid.Row gap='lg'>
                        <Grid.Col size={12} className='ui-p-25-v ui-no-p-l'>
                            <Item as='p' className='ui-font-ellipsis'>{alerts?.alertWarning}</Item>
                        </Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Card>
        </>
    )
}