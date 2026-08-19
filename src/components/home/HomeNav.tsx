import React from 'react';
import { useLocation } from 'react-router';
import Button from '@ui/Button';
import Carousel from '@ui/Carousel';
import Grid from '@ui/Grid';
import Item from '@ui/Item';

// misc
import { useStoreContext } from '@stores/StoreContext';
import type { HomeNavLinksProps } from '@models/Home';
import { mobileNavPosition } from '@helpers/Home';
import ThemeChanger from './ThemeChanger';

export default function () {
    return (
        <Grid.Row className='home-nav ui-p-15-h ui-no-m-h ui-m-15-b ui-border-b ui-border-light ui-set-sticky'>
            <Grid.Static fluid='no' className='ui-set-relative'>
                <Grid.Row>
                    <Grid.Col size={12} className='ui-hide-sm'>

                        <Item as='nav' aria-label='Home page desktop navigation' className='ui-ease-1st-btn ui-round-1st'>
                            <NavDesktopLinks />
                        </Item>

                    </Grid.Col>
                    <Grid.Col size={12} className='ui-ease-1st-btn ui-shown-sm'>

                        <Item as='nav' aria-label='Home page mobile navigation'>
                            <NavMobileLinks />
                        </Item>

                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={85} className='ui-p-10-v'>
                    <ThemeChanger type='a' />
                    <ThemeChanger type='b' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>
    )
}

const NavDesktopLinks = () => {
    const { pathname } = useLocation();
    const { api } = useStoreContext();

    return (
        <>
        {api?.home?.nav?.navLinks?.map((item: HomeNavLinksProps) => {
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
                            <Button noease block ghost={!selected} to={item.to} className='ui-border ui-border-light'>
                                {item.name}
                            </Button>
                        </Carousel.Content>
                    )
                })}

            </Carousel.Slider>
            <Carousel.Nav className='ui-hide'>
                <Carousel.Dots />
            </Carousel.Nav>
        </Carousel>
    )
}