import React from 'react';
import { useLocation } from 'react-router';
import Grid from 'uilab/react/Grid';
import HeaderSticky from 'uilab/react/HeaderSticky';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import { HeaderLeftSidebar, ToggleHeaderLeftSidebar, HeaderRightSidebar, ToggleHeaderRightSidebar } from './HeaderSidebars';
import HeaderSkeleton from '../../skeleton/Header';
import GetInTouchModal from './GetInTouchModal';
import HeaderLinks from './HeaderLinks';
import SocialLinks from './SocialLinks';
import ToggleDarkMode from './ToggleDarkMode';

export default function () {
    const { pathname } = useLocation();
    const { api } = useStoreContext();

    const showRightSidebar = pathname.startsWith('/lab');
    if (!api?.header) return <HeaderSkeleton />

    return (
        <>
        <HeaderSticky ariaLabel='Main site header' className='ui-container' dataClasses='ui-shadow'>
            <Grid.Row fluid='no'>
                <Grid.Col size={9} md={3} sm={3} xs={3}>

                    <ToggleHeaderLeftSidebar />
                    <HeaderLinks />

                </Grid.Col>
                <Grid.Col size={3} md={9} sm={9} xs={9} className='ui-align-r ui-icons-no-opacity'>

                    <SocialLinks />
                    <ToggleDarkMode />
                    {showRightSidebar && <ToggleHeaderRightSidebar />}

                </Grid.Col>
            </Grid.Row>
            <GetInTouchModal />
        </HeaderSticky>
        <HeaderLeftSidebar />
        {showRightSidebar && <HeaderRightSidebar />}
        </>
    )
}