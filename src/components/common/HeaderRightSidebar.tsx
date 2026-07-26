import React from 'react';
import Button from 'uilab/react/Button';
import Heading from 'uilab/react/Heading';
import Sidebar from 'uilab/react/Sidebar';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';

// assets
import { IconAngleRight } from 'uilab-icons/react/general/angle-right';

export default function () {
    const { api } = useStoreContext();

    return (
        <Sidebar pos='r' className='ui-round'>
            <Sidebar.Title className='ui-border-b ui-border-light'>
                <Button square ghost title='Close' className='ui-sidebar-close ui-round'>
                    <SvgIcon as='js' src={IconAngleRight} />
                </Button>
                <Heading as='h3' className='ui-font-bold ui-align-l ui-m-10-t'>
                    {api?.lab?.sidebarTitle}
                </Heading>
            </Sidebar.Title>
            <Sidebar.Content className='ui-scroll-v' />
        </Sidebar>
    )
}