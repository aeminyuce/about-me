import * as React from 'react';
import Breadcrumbs from 'uilab/react/Breadcrumbs';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../../states/StoreContext';

// assets
import { IconHome } from 'uilab-icons/react/general/home';
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';

export default function () {
    const { theme, api } = useStoreContext();

    const item1 = api?.home_featured?.nav?.item1;
    const item2 = api?.home_featured?.nav?.item2;
    const item3 = api?.home_featured?.nav?.item3;

    return (
        <Card className={`ui-align-c ui-p-15 ui-round ui-shadow ${theme}`}>
            <Breadcrumbs sep='bull' className='ui-circle-2nd'>
                <Breadcrumbs.Item>
                    <Button to={`#${item1}`} square className='ui-fill-dark-100'>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button to={`#${item2}`}>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className='ui-m-4-v ui-m-10-r' />
                        {item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button to={`#${item3}`} ghost as='span' className='ui-border'>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Card>
    )
}