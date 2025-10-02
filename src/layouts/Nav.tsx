import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'uilab/react/Button';
import Carousel from 'uilab/react/Carousel';
import Dropdown from 'uilab/react/Dropdown';
import Grid from 'uilab/react/Grid';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// utils
import type { NavLinksProps } from '../utils/Models';
import { StoreActions } from '../utils/StoreActions';
import type { ThemeListProps } from '../utils/Models';

// assets
import { IconAngleDown } from 'uilab-icons/react/general/angle-down';
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconAngleRight } from 'uilab-icons/react/general/angle-right';

export default function () {
    const { theme, setTheme } = StoreActions();
    const { pathname } = useLocation();

    // nav links
    const navLinks = [
        { name: 'Featured', to: '/' },
        { name: 'Dashboard', to: '/dashboard' },
        { name: 'Data Table', to: '/data-table' },
        { name: 'Gallery', to: '/gallery' },
        { name: 'Register', to: '/register' },
    ];

    const navPosition = () => {
        return navLinks.findIndex(item => item.to === pathname) + 1;
    };

    // theme list
    const themeList = [
        { name: 'Gray Theme', theme: 'ui-theme-gray', color: 'ui-fill-dark-100' },
        { name: 'Jungle Theme', theme: 'ui-theme-jungle', color: 'ui-fill-dark-100' },
        { name: 'Sea Theme', theme: 'ui-theme-sea', color: 'ui-fill-dark-100' },
        { name: 'Blue Theme', theme: 'ui-theme-blue', color: 'ui-fill-dark-100' },
        { name: 'Ice Theme', theme: 'ui-theme-ice', color: 'ui-fill-dark-100' },
        { name: 'Orchid Theme', theme: 'ui-theme-orchid', color: 'ui-fill-dark-100' },
        { name: 'Pink Theme', theme: 'ui-theme-pink', color: 'ui-fill-dark-100' },
        { name: 'No Theme' },
    ];

    return (
        <Grid.Row className='nav ui-p-15-b ui-m-15-b ui-border-b ui-border-light'>
            <Grid.Static fluid='no' className='ui-set-relative'>
                <Grid.Col size={44} className='ui-visible-sm' />
                <Grid.Row hGap='no'>
                    <Grid.Col size={12} className='ui-ease-1st-btn ui-hidden-sm'>
                        {navLinks.map((item: NavLinksProps) => {
                            const selected = item.to === pathname;

                            return (
                                <Button key={item.name} ghost={!selected} noease to={item.to} className='ui-m-2-r ui-round'>
                                    {item.name}
                                </Button>
                            )
                        })}
                    </Grid.Col>
                    <Grid.Col size={12} className='ui-ease-1st-btn ui-visible-sm'>
                        <Carousel half start={navPosition()} sm={3} xs={2} className='ui-set-static ui-round ui-border ui-border-light'>
                            <Carousel.Nav className='ui-no-m ui-ease-1st-btn'>
                                <Button ghost square noease className='ui-carousel-prev ui-m-2-t ui-round ui-set-absolute ui-set-l'>
                                    <SvgIcon as='js' toggle src={IconAngleLeft} />
                                </Button>
                                <Carousel.Dots className='ui-hidden' />
                                <Button ghost square noease className='ui-carousel-next ui-m-2-t ui-round ui-set-absolute ui-set-r'>
                                    <SvgIcon as='js' toggle src={IconAngleRight} />
                                </Button>
                            </Carousel.Nav>
                            <Carousel.Slider className='ui-m-2 ui-ease-2nd-btn'>
                                {navLinks.map((item: NavLinksProps) => {
                                    const selected = item.to === pathname;

                                    return (
                                        <Carousel.Content key={item.name} className='ui-p-2-r'>
                                            <Button ghost={!selected} block noease to={item.to} className='ui-round'>
                                                {item.name}
                                            </Button>
                                        </Carousel.Content>
                                    )
                                })}
                            </Carousel.Slider>
                        </Carousel>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={44} className='ui-visible-sm' />
                <Grid.Col size={61} className='ui-align-r ui-p-10-v'>
                    <Spacer size={2} className='ui-visible-sm' />
                    <Dropdown>
                        <Button ghost className='ui-round ui-p-10-h'>
                            <span className={`ui-inline-block ui-circle${theme ? ` ${theme}` : ' ui-border'}`} />
                            <SvgIcon as='js' toggle src={IconAngleDown} className='ui-m-10-l' />
                        </Button>
                        <Dropdown.Menu className='ui-color-black ui-inline-block-2nd ui-round ui-shadow-lg ui-cursor-pointer'>
                            {themeList.map((item: ThemeListProps) => {
                                const name = item.name === 'No Theme' ? null : `${item.theme} ${item.color}`;

                                return (
                                    <Dropdown.Item key={item.name} onClick={() => setTheme(name)}>
                                        <span className={`ui-m-10-r ui-circle${item.theme ? ` ${item.theme} ${item.color}` : ' ui-border'}`} />
                                        {item.name}
                                    </Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>
    );
}
