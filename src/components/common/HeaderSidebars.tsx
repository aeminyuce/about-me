import * as React from 'react';
import Button from 'uilab/react/Button';
import Heading from 'uilab/react/Heading';
import Sidebar from 'uilab/react/Sidebar';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../states/StoreContext';

// assets
import { IconBarsLeft } from 'uilab-icons/react/general/bars-left';
import { IconBarsRight } from 'uilab-icons/react/general/bars-right';
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconAngleRight } from 'uilab-icons/react/general/angle-right';

export const HeaderLeftSidebar = () => {
    const { apiResponse } = useStoreContext();
    const sidebarTitle = apiResponse?.header?.sidebarTitle;
    console.log(apiResponse);

    return (
        <Sidebar pos='l' className='ui-round'>
            <Sidebar.Title className='ui-border-b ui-border-light'>
                <Button square ghost title='Close' className='ui-sidebar-close ui-round'>
                    <SvgIcon as='js' src={IconAngleLeft} />
                </Button>
                {sidebarTitle &&
                    <Heading as='h3' className='ui-font-bold ui-align-l ui-m-10-t'>
                        {sidebarTitle}
                    </Heading>
                }
            </Sidebar.Title>
            <Sidebar.Content className='ui-scroll-v ui-align-c' />
        </Sidebar>
    )
}

export const ToggleHeaderLeftSidebar = () => {
    return (
        <Button square ghost title='Toggle Nav' className='ui-sidebar-show-l ui-round ui-visible-md'>
            <SvgIcon as='js' src={IconBarsLeft} opacity='no' />
        </Button>
    )
}

export const HeaderRightSidebar = () => {
    const { apiResponse } = useStoreContext();
    const sidebarTitle = apiResponse?.lab?.sidebarTitle;

    return (
        <Sidebar pos='r' className='ui-round'>
            <Sidebar.Title className='ui-border-b ui-border-light'>
                <Button square ghost title='Close' className='ui-sidebar-close ui-round'>
                    <SvgIcon as='js' src={IconAngleRight} />
                </Button>
                {sidebarTitle &&
                    <Heading as='h3' className='ui-font-bold ui-align-l ui-m-10-t'>
                        {sidebarTitle}
                    </Heading>
                }
            </Sidebar.Title>
            <Sidebar.Content className='ui-scroll-v' />
        </Sidebar>
    )
}

export const ToggleHeaderRightSidebar = () => {
    return (
        <Button square ghost title='Toggle Menu' className='ui-sidebar-show-r ui-round ui-visible-md'>
            <SvgIcon as='js' src={IconBarsRight} opacity='no' />
        </Button>
    )
}