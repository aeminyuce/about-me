import * as React from 'react';
import Button from 'uilab/react/Button';
import Sidebar from 'uilab/react/Sidebar';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../states/StoreContext';

// assets
import { IconBarsLeft } from 'uilab-icons/react/general/bars-left';
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';

export const HeaderSidebar = () => {
    const { apiResponse } = useStoreContext();
    const sidebarTitle = apiResponse?.header?.sidebarTitle;

    return (
        <Sidebar pos='l' className='ui-round'>
            <Sidebar.Title className='ui-sidebar-title ui-border-b ui-border-light'>
                <Button square ghost title='Close' className='ui-sidebar-close ui-round'>
                    <SvgIcon as='js' src={IconAngleLeft} />
                </Button>
                {sidebarTitle &&
                    <h3 className='ui-h3 ui-font-bold ui-align-l ui-m-10-t'>{sidebarTitle}</h3>
                }
            </Sidebar.Title>
            <Sidebar.Content className='ui-scroll-v ui-align-c' />
        </Sidebar>
    )
}

export const ToggleHeaderSidebar = () => {
    return (
        <Button square ghost title='Toggle Nav' className='ui-sidebar-show-l ui-round ui-visible-md'>
            <SvgIcon as='js' src={IconBarsLeft} opacity='no' />
        </Button>
    )
}