import * as React from 'react';
import Avatar from 'uilab/react/Avatar';
import Button from 'uilab/react/Button';
import Dropdown from 'uilab/react/Dropdown';
import Grid from 'uilab/react/Grid';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// utils
import type { BodyLinksProps } from './utils/Models';
import { StoreActions } from './utils/StoreActions';
import type { ThemeListProps } from './utils/Models';
import { ShowGetInTouch } from './utils/ShowGetInTouch';

// assets
import { IconMarker } from 'uilab-icons/react/general/marker';
import { IconHome } from 'uilab-icons/react/general/home';
import { IconAngleDown } from 'uilab-icons/react/general/angle-down';
import { IconSun } from 'uilab-icons/react/weather/sun';
import { IconMoon } from 'uilab-icons/react/weather/moon';

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

                {/* profile */}
                <Grid.Row fluid='xs' hGap='lg' className='ui-m-30-t ui-m-5-b'>
                    <Grid.Col size={5} className='ui-align-r ui-xs-align-c'>
                        <Avatar size='lg' className='ui-circle'>
                            <img src='fab86d4463f.png' alt='A. Emin Yuce | Sr. Front End Developer' />
                        </Avatar>
                    </Grid.Col>
                    <Grid.Col size={7} className='ui-xs-align-c'>
                        <h1 className='ui-h1 ui-font-30 ui-font-bold ui-m-15-t'>A. Emin Yuce</h1>
                        <span className='ui-font-16 ui-m-5-b ui-block'>Sr. Front End Developer</span>

                        <SvgIcon as='js' src={IconMarker} size='sm' className='ui-m-5-r' />
                        <span className='ui-font-16 ui-inline-block'>Ankara, Turkiye</span>

                        <Spacer size={25} />

                        {/* get in touch buttons */}
                        <div className='ui-form-lg ui-ease-1st-btn'>
                            <Button noease className='ui-bg-black ui-circle ui-visible-light' title='Get in Touch' onClick={ShowGetInTouch}>Get in Touch</Button>
                            <Button noease className='ui-bg-white ui-circle ui-visible-dark' title='Get in Touch' onClick={ShowGetInTouch}>Get in Touch</Button>
                        </div>
                    </Grid.Col>
                </Grid.Row>

                {/* personal skills */}
                <Grid.Row>
                    <Grid.Col size={6} push={3} className='ui-m-30-b'>
                        <p className='ui-color-black-25 ui-font-15 ui-align-c'>
                            Html, CSS, Less, SCSS, Saas, Javascript, Ecmascript, Typescript, React, SSR, Next Js, Astro, Remix, Node Js, Webpack, Responsive, Adaptive, Mobile
                        </p>
                    </Grid.Col>
                </Grid.Row>

                {/* body links */}
                <Grid.Row hGap='no'>
                    <Grid.Col size={12} className='ui-border-b ui-border-light ui-ease-1st-btn ui-visible-md'>
                        {bodyLinks.map((item: BodyLinksProps) => (
                            <Button key={item.name} ghost noease to={item.to} className='ui-m-2-r ui-round'>
                                {item.name}
                            </Button>
                        ))}
                    </Grid.Col>
                </Grid.Row>

                {/* <div className='ui-align-c ui-set-absolute ui-set-c'>
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
                </div> */}

            </Grid.Container>
        </Grid.Container>
    );
}
