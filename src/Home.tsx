import * as React from 'react';
import Button from 'uilab/react/Button';
import Dropdown from 'uilab/react/Dropdown';
import Grid from 'uilab/react/Grid';
import SvgIcon from 'uilab/react/SvgIcon';

// layouts
import AboutMe from './layouts/AboutMe';

// utils
import type { BodyLinksProps } from './utils/Models';
import { StoreActions } from './utils/StoreActions';
import type { ThemeListProps } from './utils/Models';

// assets
import { IconAngleDown } from 'uilab-icons/react/general/angle-down';

export default function () {
    const { theme, setTheme } = StoreActions();

    // body links
    const bodyLinks = [
        { name: 'Featured', to: '/' },
        { name: 'Dashboard', to: '/' },
        { name: 'Data Table', to: '/' },
        { name: 'Gallery', to: '/' },
        { name: 'Register', to: '/' },
    ];

    // theme list
    const themeList = [
        { name: 'Gray Theme', theme: 'ui-theme-gray', color: 'ui-fill-dark-300' },
        { name: 'Jungle Theme', theme: 'ui-theme-jungle', color: 'ui-fill-dark-300' },
        { name: 'Sea Theme', theme: 'ui-theme-sea', color: 'ui-fill-dark-300' },
        { name: 'Blue Theme', theme: 'ui-theme-blue', color: 'ui-fill-dark-300' },
        { name: 'Ice Theme', theme: 'ui-theme-ice', color: 'ui-fill-dark-300' },
        { name: 'Orchid Theme', theme: 'ui-theme-orchid', color: 'ui-fill-dark-300' },
        { name: 'Pink Theme', theme: 'ui-theme-pink', color: 'ui-fill-dark-300' },
        { name: 'No Theme (Dark/Light Mode)' },
    ];

    return (
        <Grid.Container as='main'>
            <Grid.Container fixed='xl' as='div' noGutter='lg'>

                {/* about me */}
                <AboutMe />

                {/* body links */}
                <Grid.Row hGap='no' className='ui-border-b ui-border-light'>
                    <Grid.Col size={8} className='ui-ease-1st-btn'>
                        {bodyLinks.map((item: BodyLinksProps) => (
                            <Button key={item.name} ghost noease to={item.to} className='ui-m-2-r ui-round'>
                                {item.name}
                            </Button>
                        ))}
                    </Grid.Col>
                    <Grid.Col size={4} className='ui-align-r'>
                        <Dropdown>
                            <Button ghost className='ui-round'>
                                Theme
                                <SvgIcon as='js' toggle src={IconAngleDown} className='ui-m-15-l' />
                            </Button>
                            <Dropdown.Menu className='ui-color-black ui-round ui-shadow-lg'>
                                {themeList.map((item: ThemeListProps) => {
                                    const name = item.name === 'No Theme' ? null : item.theme + ' ' + item.color;

                                    return (
                                        <Dropdown.Item key={item.name} onClick={() => setTheme(name)}>
                                            {item.name}
                                        </Dropdown.Item>
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid.Col>
                </Grid.Row>

            </Grid.Container>
        </Grid.Container>
    );
}
