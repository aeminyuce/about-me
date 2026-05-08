import * as React from 'react';
import Card from 'uilab/react/Card';
import Grid from 'uilab/react/Grid';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../../stores/StoreContext';

// assets
import { IconAlertShield } from 'uilab-icons/react/general/alert-shield';
import { IconCheckBadge } from 'uilab-icons/react/general/check-badge';

export default function() {
    const { themeA, themeB, api } = useStoreContext();
    const alerts = api?.home_featured?.alerts;

    return (
        <>
            <Card closable className={`ui-round ${themeB} ui-fill-light-200`}>
                <Grid.Static fluid='no'>
                    <Grid.Col size={72} className='ui-set-relative'>
                        <span className='ui-set-absolute ui-set-c'>
                            <SvgIcon as='js' src={IconCheckBadge} size='lg' animate='pop' className='ui-text' />
                        </span>
                    </Grid.Col>
                    <Grid.Row>
                        <Grid.Col size={12} className='ui-p-25-v ui-no-p-l'>{alerts?.alertSuccess}</Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Card>

            <Card closable className={`ui-round ${themeA} ui-fill-light-200`}>
                <Grid.Static fluid='no'>
                    <Grid.Col size={72} className='ui-set-relative'>
                        <span className='ui-set-absolute ui-set-c'>
                            <SvgIcon as='js' src={IconAlertShield} size='lg' animate='pop' className='ui-text' />
                        </span>
                    </Grid.Col>
                    <Grid.Row>
                        <Grid.Col size={12} className='ui-p-25-v ui-no-p-l'>{alerts?.alertWarning}</Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Card>
        </>
    )
}