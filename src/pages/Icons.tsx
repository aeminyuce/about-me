import * as React from 'react';
import { Fragment } from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../states/StoreContext';
import type { SizeListProps, IconsListProps } from '../models/Icons';
import { copyIconName } from '../helpers/Icons';
import GetImage from '../components/common/GetImage';
import MyAvatar from '../components/common/MyAvatar';

// assets
const iconsList = require('uilab-icons/icons-list.json') as IconsListProps[];

const SpriteGeneral = require('uilab-icons/sprite/general.svg') as string;
const SpriteTouch = require('uilab-icons/sprite/touch.svg') as string;
const SpriteMedia = require('uilab-icons/sprite/media.svg') as string;
const SpriteKitchen = require('uilab-icons/sprite/kitchen.svg') as string;
const SpriteRealEstate = require('uilab-icons/sprite/real-estate.svg') as string;
const SpriteWeather = require('uilab-icons/sprite/weather.svg') as string;
const SpriteCommerce = require('uilab-icons/sprite/commerce.svg') as string;
const SpriteFiles = require('uilab-icons/sprite/files.svg') as string;
const SpriteSocial = require('uilab-icons/sprite/social.svg') as string;
const SpriteBrands = require('uilab-icons/sprite/brands.svg') as string;

// styles
import '../../src/assets/icons.less';

export default function () {
    const { iconSize, setIconSize } = useStoreContext();

    // icon sizes
    const sizeList = [
        { name: 'XXL', size: 'xxl' },
        { name: 'XL', size: 'xl' },
        { name: 'L', size: 'lg' },
        { name: '-', size: '-' },
        { name: 'SM', size: 'sm' },
        { name: 'XS', size: 'xs' },
    ];

    // sprites
    const spritesList = {
        'General': SpriteGeneral,
        'Touch': SpriteTouch,
        'Media': SpriteMedia,
        'Kitchen': SpriteKitchen,
        'Real-Estate': SpriteRealEstate,
        'Weather': SpriteWeather,
        'Commerce': SpriteCommerce,
        'Files': SpriteFiles,
        'Social': SpriteSocial,
        'Brands': SpriteBrands,
    };

    // get total icons length
    let totalLength = 0;

    iconsList.map((item: IconsListProps) => {
        totalLength += item.length;
    });

    return (
        <Grid.Container as='main' ariaLabel='Main site content' noGutter='all'>
            <Grid.Container fixed='xl' as='div' className='ui-sm-no-p ui-align-c ui-p-30-v'>

                <Grid.Row>
                    <Grid.Col size={12}>
                        <MyAvatar />
                        <Heading as='h1' className='ui-font-light ui-font-48 ui-m-30-v'>
                            Hi! I design elegant and hand-crafted SVG icons.
                        </Heading>
                    </Grid.Col>
                    <Grid.Row fluid='sm' className='iconslist-images ui-m-auto ui-m-20-b ui-round-more-2nd'>
                        <Grid.Col size={6}>
                            <GetImage src='icon-preview.jpg' className='ui-img-fluid ui-border' />
                        </Grid.Col>
                        <Grid.Col size={6}>
                            <GetImage src='vector-preview.jpg' className='ui-img-fluid ui-border' />
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Col size={12}>
                        <p className='ui-font-22 ui-font-readable ui-m-25-b ui-theme-greenYellow ui-text'>
                            I design elegant, hand‑crafted SVG icons that give your interface clarity, personality, and precision.<br />
                            Each icon is drawn from scratch, resulting in a lightweight, cleanly‑anchored, and fully scalable system that feels uniquely yours.
                        </p>
                        <div className='ui-font-18 ui-opacity-half'>
                            A total of {totalLength} icons crafted! Adjust the icon sizes below.
                        </div>
                    </Grid.Col>
                    <Grid.Col size={4} offset={4}>
                        <Button.Wrapper as='div' type='holder' largeButtons ease='1st' className='ui-theme-redPurple'>

                            {sizeList.map((item: SizeListProps) => {
                                const classes = `ui-round${item.size === iconSize ? ' ui-fill-dark-100' : ''}`;

                                return (
                                    <Button key={item.name} noease className={classes} data={{ 'size': item.size  }} onClick={() => setIconSize(item.size)}>
                                        {item.name}
                                    </Button>
                                )
                            })}

                        </Button.Wrapper>
                    </Grid.Col>
                    <Grid.Col size={12} className='iconslist'>

                        {iconsList.map((item: IconsListProps) => (
                            <Fragment key={item.category}>
                                <Heading as='h2'>
                                    <span className="ui-inline-block">
                                        {item.category} Icons
                                    </span>
                                    <Button as='span' size='xs' className='ui-m-10-l ui-p-10-h ui-circle'>
                                        {item.length} Icons
                                    </Button>
                                </Heading>
                                <Button.Wrapper as='div' ease='1st' className={`ui-highlight ui-round-1st ui-icons-${iconSize}`}>

                                    {item.icons.map((name: string) => {
                                        const classes = name.includes('loader-') ? 'ui-animate-spin' : null;

                                        return (
                                            <Button key={name} multi noease onClick={() => copyIconName(name)}>
                                                <SvgIcon as='sprite' src={spritesList[item.category]} symbolId={name} className={classes} opacity='no' />
                                                <span>{name}</span>
                                            </Button>
                                        )
                                    })}

                                </Button.Wrapper>
                            </Fragment>
                        ))}

                    </Grid.Col>
                </Grid.Row>

            </Grid.Container>
        </Grid.Container>
    );
}