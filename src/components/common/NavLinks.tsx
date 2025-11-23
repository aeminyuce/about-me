import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'uilab/react/Button';
import Carousel from 'uilab/react/Carousel';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import type { NavLinksProps } from '../../utils/Models';
import { useStoreContext } from '../../states/StoreContext';
import { mobileNavPosition } from '../../utils/Helpers';

// assets
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconAngleRight } from 'uilab-icons/react/general/angle-right';

export const NavDesktopLinks = () => {
    const { pathname } = useLocation();
    const { apiResponse } = useStoreContext();

    return (
        <>
        {apiResponse?.nav?.navLinks.map((item: NavLinksProps) => {
            const selected = item.to === pathname;

            return (
                <Button key={item.name} ghost={!selected} noease to={item.to} className='ui-m-2-r ui-round'>
                    {item.name}
                </Button>
            )
        })}
        </>
    )
}

export const NavMobileLinks = () => {
    const { pathname } = useLocation();

    const { apiResponse } = useStoreContext();
    const navLinks = apiResponse?.nav?.navLinks;

    const start = mobileNavPosition(navLinks, pathname);

    return (
        <Carousel half start={start} sm={3} xs={2} className='ui-set-static ui-round ui-border ui-border-light'>
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
    )
}
