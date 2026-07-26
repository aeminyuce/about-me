import React from 'react';
import Button from 'uilab/react/Button';
import Heading from 'uilab/react/Heading';
import Sidebar from 'uilab/react/Sidebar';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';

// assets
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';

export default function () {
    const { api } = useStoreContext();

    return (
        <Sidebar pos='l' className='ui-round'>
            <Sidebar.Title className='ui-border-b ui-border-light'>
                <Button square ghost title='Close' className='ui-sidebar-close ui-round'>
                    <SvgIcon as='js' src={IconAngleLeft} />
                </Button>
                <Heading as='h3' className='ui-font-bold ui-align-l ui-m-10-t'>
                    {api?.general?.fullName}
                </Heading>
            </Sidebar.Title>
            <Sidebar.Content className='ui-scroll-v ui-align-c' />
        </Sidebar>
    )
}