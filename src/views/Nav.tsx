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
import type { ThemeListProps } from '../utils/Models';
import { useStoreContext } from './StoreContext';
import { mobileNavPosition } from '../utils/Helpers';

// assets
import { IconAngleDown } from 'uilab-icons/react/general/angle-down';
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconAngleRight } from 'uilab-icons/react/general/angle-right';

export default function () {
    const { theme, setTheme, apiResponse } = useStoreContext();
    const { pathname } = useLocation();

    const navData = apiResponse?.nav;

    return (
        <Grid.Row className='nav ui-p-15-b ui-m-15-b ui-border-b ui-border-light'>
            <Grid.Static fluid='no' className='ui-set-relative'>
                <Grid.Col size={44} className='ui-visible-sm' />
                <Grid.Row hGap='no'>
                    <Grid.Col size={12} className='ui-ease-1st-btn ui-hidden-sm'>

                        {navData?.navLinks.map((item: NavLinksProps) => {
                            const selected = item.to === pathname;

                            return (
                                <Button key={item.name} ghost={!selected} noease to={item.to} className='ui-m-2-r ui-round'>
                                    {item.name}
                                </Button>
                            )
                        })}

                    </Grid.Col>
                    <Grid.Col size={12} className='ui-ease-1st-btn ui-visible-sm'>
                        <Carousel half start={mobileNavPosition(navData?.navLinks, pathname)} sm={3} xs={2} className='ui-set-static ui-round ui-border ui-border-light'>
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

                                {navData?.navLinks.map((item: NavLinksProps) => {
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
                            <span className={`ui-inline-block ui-circle${theme ? ` ${theme} ui-fill-dark-100` : ' ui-border'}`} />
                            <SvgIcon as='js' toggle src={IconAngleDown} className='ui-m-10-l' />
                        </Button>
                        <Dropdown.Menu className='ui-color-black ui-inline-block-2nd ui-round ui-shadow-lg ui-cursor-pointer'>

                            {navData?.themeList.map((item: ThemeListProps) => (
                                <Dropdown.Item key={item.name} onClick={() => setTheme(item.theme)}>
                                    <span className={`ui-m-10-r ui-circle${item.theme ? ` ${item.theme} ui-fill-dark-100` : ' ui-border'}`} />
                                    {item.name}
                                </Dropdown.Item>
                            ))}

                        </Dropdown.Menu>
                    </Dropdown>
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>
    );
}
