import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router';
import Button from '@ui/Button';
import Grid from '@ui/Grid';
import HeaderSticky from '@ui/HeaderSticky';
import SvgIcon from '@ui/SvgIcon';

// misc
const HeaderRightSidebar = lazy(() => import( /* webpackChunkName: 'misc/HeaderRightSidebar' */ './HeaderRightSidebar' ));

import { useStoreContext } from '@stores/StoreContext';
import HeaderLeftSidebar from './HeaderLeftSidebar';
import HeaderSkeleton from '@skeleton/Header';
import GetInTouchModal from './GetInTouchModal';
import HeaderLinks from './HeaderLinks';
import SocialLinks from './SocialLinks';
import ToggleDarkMode from './ToggleDarkMode';

// assets
import { IconBarsLeft } from '@icon/general/bars-left';
import { IconBarsRight } from '@icon/general/bars-right';

export default function () {
    const { pathname } = useLocation();
    const { api } = useStoreContext();

    if (!api?.header) return <HeaderSkeleton />
    const showRightSidebar = pathname.startsWith('/lab');

    return (
        <>
        <HeaderSticky aria-label='Main site header' className='ui-container' dataClasses='ui-shadow'>
            <Grid.Row fluid='no'>
                <Grid.Col size={9} md={3} sm={3} xs={3}>

                    <Button square ghost title='Toggle Nav' className='ui-sidebar-show-l ui-round ui-shown-md'>
                        <SvgIcon as='js' src={IconBarsLeft} opacity='no' />
                    </Button>
                    <HeaderLinks />

                </Grid.Col>
                <Grid.Col size={3} md={9} sm={9} xs={9} className='ui-align-r ui-icons-no-opacity'>

                    <SocialLinks />
                    <ToggleDarkMode />

                    {showRightSidebar &&
                        <Button square ghost title='Toggle Menu' className='ui-sidebar-show-r ui-align-c ui-round ui-shown-md'>
                            <SvgIcon as='js' src={IconBarsRight} opacity='no' />
                        </Button>
                    }

                </Grid.Col>
            </Grid.Row>
            <GetInTouchModal />
        </HeaderSticky>

        <HeaderLeftSidebar />
        {showRightSidebar &&
            <Suspense>
                <HeaderRightSidebar />
            </Suspense>
        }
        </>
    )
}