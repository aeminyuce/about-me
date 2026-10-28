import Box from '@ui/Box';
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
                <Box as='span' alignItems='l' gap={20} className='ui-p-20'>
                    <SvgIcon as='js' src={IconCheckBadge} size='lg' animate='pop' v={2} className='ui-text' />
                    <Item as='p' className='ui-font-ellipsis'>{alerts?.alertSuccess}</Item>
                </Box>
            </Card>

            <Card closable className={`ui-round ${themeA} ui-fill-light-200`}>
                <Box as='span' alignItems='l' gap={20} className='ui-p-2 ui-p-20'>
                    <SvgIcon as='js' src={IconAlertShield} size='lg' animate='elastic' v={2} className='ui-text' />
                    <Item as='p' className='ui-font-ellipsis'>{alerts?.alertWarning}</Item>
                </Box>
            </Card>
        </>
    )
}