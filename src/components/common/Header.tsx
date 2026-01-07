import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Grid from 'uilab/react/Grid';
import HeaderSticky from 'uilab/react/HeaderSticky';

// misc
import { useStoreContext } from '../../states/StoreContext';
import GetInTouchModal from './GetInTouchModal';
import HeaderLinks from './HeaderLinks';
import SocialLinks from './SocialLinks';
import ToggleDarkMode from './ToggleDarkMode';
import { HeaderLeftSidebar, ToggleHeaderLeftSidebar, HeaderRightSidebar, ToggleHeaderRightSidebar } from './HeaderSidebars';

export default function () {
    const { pathname } = useLocation();

    const { apiResponse } = useStoreContext();
    const headerData = apiResponse?.header;

    const showRightSidebar = pathname.startsWith('/lab');

    return headerData && (
        <>
        <HeaderSticky className='ui-container' dataClasses='ui-shadow'>
            <Grid.Row fluid='no'>
                <Grid.Col size={9} md={3} sm={3} xs={3}>

                    <ToggleHeaderLeftSidebar />
                    {headerData?.headerLinks && <HeaderLinks />}

                </Grid.Col>
                <Grid.Col size={3} md={9} sm={9} xs={9} className='ui-align-r ui-icons-no-opacity'>

                    {headerData?.socialLinks && <SocialLinks />}
                    <ToggleDarkMode />
                    {showRightSidebar && <ToggleHeaderRightSidebar />}

                </Grid.Col>
            </Grid.Row>

            {headerData?.getInTouch && <GetInTouchModal />}
        </HeaderSticky>
        <HeaderLeftSidebar />
        <HeaderRightSidebar />
        </>
    );
}