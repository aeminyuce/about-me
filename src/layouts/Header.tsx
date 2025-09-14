import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import HeaderSticky from 'uilab/react/HeaderSticky';
import Sidebar from 'uilab/react/Sidebar';
import SvgIcon from 'uilab/react/SvgIcon';

// utils
import type { HeaderLinksProps, SocialLinksProps } from '../utils/Models';

// assets
import { IconDribbble } from 'uilab-icons/react/social/dribbble';
import { IconGithub } from 'uilab-icons/react/social/github';
import { IconLinkedin } from 'uilab-icons/react/social/linkedin';
import { IconBarsLeft } from 'uilab-icons/react/general/bars-left';
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconSun } from 'uilab-icons/react/weather/sun';
import { IconMoon } from 'uilab-icons/react/weather/moon';

export default function () {
    // links
    const headerLinks = [
        { name: 'About Me', to: '/' },
        { name: 'UI Laboratory', to: '/uilab' },
        { name: 'Get In Touch', to: '#', target: '_blank'},
    ];

    // social links
    const socialLinks = [
        { title: 'GitHub', url: process.env.GITHUB_URL, icon: IconGithub },
        { title: 'Dribbble', url: process.env.DRIBBBLE_URL, icon: IconDribbble },
        { title: 'LinkedIn', url: process.env.LINKEDIN_URL, icon: IconLinkedin },
    ];

    return (
        <HeaderSticky className='ui-container ui-border-b ui-border-light'>
            <Grid.Row fluid='no'>
                <Grid.Col size={6} xs={3}>
                    {/* toggle header sidebar */}
                    <Button square ghost title='Toggle Nav' className='ui-sidebar-show-l ui-round ui-visible-md'>
                        <SvgIcon as='js' src={IconBarsLeft} opacity='no' />
                    </Button>

                    {/* header links */}
                    <span className='ui-hidden-md'>
                        <span className='ui-sidebar-add-l'>
                            {headerLinks.map((item: HeaderLinksProps) => (
                                <Button key={item.name} ghost href={item.target && item.to} to={!item.target && item.to} className='ui-m-2-r ui-round' target={item.target}>
                                    {item.name}
                                </Button>
                            ))}
                        </span>
                    </span>
                </Grid.Col>
                <Grid.Col size={6} xs={9} className='ui-align-r ui-icons-no-opacity'>
                    {/* social links */}
                    {socialLinks.map((item: SocialLinksProps) => (
                        <Button key={item.title} square ghost title={item.title} href={item.url} className='ui-round' target='_blank' rel='nofollow'>
                            <SvgIcon as='js' src={item.icon} />
                        </Button>
                    ))}

                    {/* toggle dark mode */}
                    <Button square ghost title='Toggle Dark Mode' className='ui-darkmode-toggle ui-round ui-m-5-l'>
                        <SvgIcon as='js' src={IconMoon} opacity='half' className='ui-visible-dark' />
                        <SvgIcon as='js' src={IconSun} opacity='half' className='ui-visible-light' />
                    </Button>
                </Grid.Col>
            </Grid.Row>

            {/* header sidebar */}
            <Sidebar pos='l' className='ui-round'>
                <Sidebar.Title className='ui-sidebar-title'>
                    <Button square ghost title='Close' className='ui-sidebar-close ui-round'>
                        <SvgIcon as='js' src={IconAngleLeft} />
                    </Button>
                    <h3 className='ui-h3 ui-font-bold ui-align-l ui-m-10-t'>Menu</h3>
                </Sidebar.Title>
                <Sidebar.Content className='ui-scroll-v' />
            </Sidebar>
        </HeaderSticky>
    );
}
