import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'uilab/react/Button';
import Carousel from 'uilab/react/Carousel';
import Grid from 'uilab/react/Grid';

// misc
import type { HomeNavLinksProps } from '../../models/Home';
import ThemeChanger from './ThemeChanger';
import { useStoreContext } from '../../states/StoreContext';
import { mobileNavPosition } from '../../helpers/Home';

export default function () {
    const { api } = useStoreContext();
    const navData = api?.home?.nav;

    return navData && (
        <Grid.Row className='home-nav ui-p-15-b ui-m-15-b ui-border-b ui-border-light'>
            <Grid.Static fluid='no' className='ui-set-relative'>
                <Grid.Row>
                    <Grid.Col size={12} className='ui-hidden-sm'>

                        <nav aria-label='Home page desktop navigation' className='ui-ease-1st-btn ui-round-1st'>
                            {navData?.navLinks && <NavDesktopLinks />}
                        </nav>

                    </Grid.Col>
                    <Grid.Col size={12} className='ui-ease-1st-btn ui-visible-sm'>

                        <nav aria-label='Home page mobile navigation'>
                            {navData?.navLinks && <NavMobileLinks />}
                        </nav>

                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={70} className='ui-p-10-v'>

                    {navData?.themeList && <ThemeChanger />}

                </Grid.Col>
            </Grid.Static>
        </Grid.Row>
    );
}

const NavDesktopLinks = () => {
    const { pathname } = useLocation();
    const { api } = useStoreContext();

    const navLinks = api?.home?.nav?.navLinks;

    return (
        <>
        {navLinks.map((item: HomeNavLinksProps) => {
            const selected = item.to === pathname;

            return (
                <Button key={item.name} ghost={!selected} noease to={item.to} className='ui-m-2-r'>
                    {item.name}
                </Button>
            )
        })}
        </>
    )
}

const NavMobileLinks = () => {
    const { pathname } = useLocation();
    const { api } = useStoreContext();

    const navLinks = api?.home?.nav?.navLinks;
    const start = mobileNavPosition(navLinks, pathname);

    return (
        <Carousel start={start} sm={3} xs={2}>
            <Carousel.Slider className='ui-ease-2nd-btn ui-round-2nd'>

                {navLinks?.map((item: HomeNavLinksProps) => {
                    const selected = item.to === pathname;

                    return (
                        <Carousel.Content key={item.name} className='ui-p-3-r'>
                            <Button noease ghost={!selected} block='all' to={item.to} className='ui-border ui-border-light'>
                                {item.name}
                            </Button>
                        </Carousel.Content>
                    )
                })}

            </Carousel.Slider>
            <Carousel.Nav className='ui-hidden'>
                <Carousel.Dots />
            </Carousel.Nav>
        </Carousel>
    )
}