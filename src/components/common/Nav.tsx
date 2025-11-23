import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';
import ThemeChanger from './ThemeChanger';
import { NavDesktopLinks, NavMobileLinks } from './NavLinks';

export default function () {
    const { apiResponse } = useStoreContext();
    const navData = apiResponse?.nav;

    return navData && (
        <Grid.Row className='nav ui-p-15-b ui-m-15-b ui-border-b ui-border-light'>
            <Grid.Static fluid='no' className='ui-set-relative'>
                <Grid.Col size={47} className='ui-visible-sm' />
                <Grid.Row>
                    <Grid.Col size={12} className='ui-ease-1st-btn ui-hidden-sm'>
                        {navData?.navLinks && <NavDesktopLinks />}
                    </Grid.Col>
                    <Grid.Col size={12} className='ui-ease-1st-btn ui-visible-sm'>
                        {navData?.navLinks && <NavMobileLinks />}
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42} className='ui-visible-sm' />
                <Grid.Col size={69} className='ui-p-10-v'>
                    {navData?.themeList && <ThemeChanger />}
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>
    );
}