import * as React from 'react';
import Button from 'uilab/react/Button';
import Dropdown from 'uilab/react/Dropdown';
import Grid from 'uilab/react/Grid';
import SvgIcon from 'uilab/react/SvgIcon';

// utils
import { StoreActions } from './utils/StoreActions';
import type { ThemeListProps } from './utils/Models';

// assets
import { IconHome } from 'uilab-icons/react/general/home';
import { IconAngleDown } from 'uilab-icons/react/general/angle-down';
import { IconSun } from 'uilab-icons/react/weather/sun';
import { IconMoon } from 'uilab-icons/react/weather/moon';

export default function () {
    const { theme, setTheme } = StoreActions();

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
                <Grid.Row>
                    <Grid.Col size={12}>
                        Home
                    </Grid.Col>
                </Grid.Row>

                {/* <div className={'ui-set-absolute ui-set-all' + (theme ? ' ' + theme : '')}>
                    <Button square ghost title='Toggle Dark Mode' className='ui-darkmode-toggle ui-m-10 ui-round ui-set-absolute ui-set-t ui-set-r'>
                        <SvgIcon as='js' src={IconMoon} className='ui-visible-dark' />
                        <SvgIcon as='js' src={IconSun} className='ui-visible-light' />
                    </Button>

                    <div className='ui-align-c ui-set-absolute ui-set-c'>
                        <SvgIcon as='js' src={IconHome} size='xxl' className='ui-m-10-b' />
                        <div className='ui-font-28 ui-m-10-b'>Welcome Home!</div>

                        <Dropdown align='c'>
                            <Button ghost className='ui-round'>
                                Change Theme
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
                    </div>
                </div> */}

            </Grid.Container>
        </Grid.Container>
    );
}
