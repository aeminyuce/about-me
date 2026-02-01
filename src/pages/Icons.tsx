import * as React from 'react';
import { Fragment } from 'react';
import Alerts from 'uilab/react/Alerts';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../states/StoreContext';
import type { SizeListProps, IconsListProps } from '../models/Icons';

// assets
const iconsList = require('uilab-icons/icons-list.json') as IconsListProps[];

const SpriteGeneral = require('uilab-icons/sprite/general.svg');
const SpriteTouch = require('uilab-icons/sprite/touch.svg');
const SpriteMedia = require('uilab-icons/sprite/media.svg');
const SpriteKitchen = require('uilab-icons/sprite/kitchen.svg');
const SpriteRealEstate = require('uilab-icons/sprite/real-estate.svg');
const SpriteWeather = require('uilab-icons/sprite/weather.svg');
const SpriteCommerce = require('uilab-icons/sprite/commerce.svg');
const SpriteFiles = require('uilab-icons/sprite/files.svg');
const SpriteSocial = require('uilab-icons/sprite/social.svg');
const SpriteBrands = require('uilab-icons/sprite/brands.svg');

// styles
import '../../src/assets/icons.less';

export default function () {
    const { iconSize, setIconSize, setIconCopy } = useStoreContext();

    // icon sizes
    const selectedSize = 'xl';

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
        'general': SpriteGeneral,
        'touch': SpriteTouch,
        'media': SpriteMedia,
        'kitchen': SpriteKitchen,
        'real-estate': SpriteRealEstate,
        'weather': SpriteWeather,
        'commerce': SpriteCommerce,
        'files': SpriteFiles,
        'social': SpriteSocial,
        'brands': SpriteBrands,
    };

    // get total icons length
    let totalLength = 0;

    iconsList.map((item: IconsListProps) => {
        totalLength += item.length;
    });

    // helpers
    const copyText = (text: string) => {
        if (document.hasFocus()) {
            navigator.clipboard.writeText(text).then(() => {
                Alerts.Message({
                    msg: `<b>Copied!</b><br>${text}`
                });
            }).catch((err) => {
                Alerts.Message({
                    msg: `<b>Failed to copy ${text}!</b><br>${err}`,
                    theme: 'danger'
                });
            });
        }
    };

    return (
        <Grid.Container as='main' ariaLabel='Main site content' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

                <div className='ui-sm-no-p ui-align-c ui-p-30-v'>

                    <Grid.Row>
                        <Grid.Col size={12}>
                            <h2 className='ui-h2'>
                                SVG Icons
                                <span className='ui-font-18 ui-m-5-v ui-block ui-opacity-half'>(Total Icons: {totalLength})</span>
                            </h2>
                        </Grid.Col>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Col size={8} offset={2}>
                            <h4 className='ui-h4 ui-m-10-b'>Change Size</h4>
                            <Button.Wrapper as='div' largeButtons ease='1st' className={`ui-m-20-b ui-theme-blue`}>

                                {sizeList.map((item: SizeListProps) => {
                                    let classes = 'ui-round';
                                    if ((iconSize === null && item.size === selectedSize) || (iconSize !== null && item.size === iconSize)) classes += ' ui-fill-dark-100';

                                    return (
                                        <Button noease key={item.name} size-ui-size={item.size} className={classes} onClick={() => setIconSize(item.size)}>
                                            {item.name}
                                        </Button>
                                    )
                                })}

                            </Button.Wrapper>
                        </Grid.Col>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Col size={12} className='icon-list'>

                            {iconsList.map((item: IconsListProps) => (
                                <Fragment key={item.category}>
                                    <h2 className='ui-h2 ui-m-30-v'>
                                        {item.category} Icons
                                        <span className='ui-font-16 ui-m-5-v ui-block ui-opacity-half'>
                                            ({item.length} icons)
                                        </span>
                                    </h2>

                                    <Button.Wrapper as='div' ease='1st' className={`ui-highlight ui-icons-${iconSize ? iconSize : selectedSize}`}>

                                        {item.icons.map((name: string) => {
                                            const classes = name.includes('loader-') ? 'ui-animate-spin' : null;

                                            return (
                                                <Button key={name} multi noease className='ui-col-150 ui-p-10-v ui-no-p-h ui-m-1 ui-round' onClick={() => copyText(setIconCopy(name))}>
                                                    <SvgIcon as='sprite' src={spritesList[item.category]} symbolId={name} className={classes} opacity='no' />
                                                    <span className='ui-font-13 ui-opacity-half ui-m-5-t ui-block'>{name}</span>
                                                </Button>
                                            )
                                        })}

                                    </Button.Wrapper>
                                </Fragment>
                            ))}

                        </Grid.Col>
                    </Grid.Row>

                </div>

            </Grid.Container>
        </Grid.Container>
    );
}