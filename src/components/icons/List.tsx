import * as React from 'react';
import { Fragment } from 'react';
import Button from 'uilab/react/Button';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import type { IconsListProps } from '../../models/Icons';
import { copyIconName } from '../../helpers/Icons';

// assets
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

export default function (props: any) {
    const { iconSize, api } = useStoreContext();
    const { iconsList } = props;

    const iconsSuffix = api?.icons?.info?.iconsSuffix;

    // sprites
    const spritesList: any = {
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

    return (
        <div className='iconslist-icons'>

            {iconsList.map((item: IconsListProps) => (
                <Fragment key={item.category}>
                    <Heading as='h2'>
                        <span className='ui-inline-block'>
                            {item.category} {iconsSuffix}
                        </span>
                        <Button as='span' size='xs' className='ui-m-10-l ui-p-10-h ui-circle'>
                            {item.length} {iconsSuffix}
                        </Button>
                    </Heading>
                    <Button.Wrapper as='div' ease='1st' className={`ui-highlight ui-round-1st ui-icons-${iconSize}`}>

                        {item.icons.map((name: string) => {
                            const classes = name.includes('loader-') ? 'ui-animate-spin' : '';

                            return (
                                <Button key={name} ghost multi noease onClick={() => copyIconName(name, item.category)}>
                                    <SvgIcon as='sprite' src={spritesList[item.category]} symbolId={name} className={classes} opacity='no' />
                                    <span>{name}</span>
                                </Button>
                            )
                        })}

                    </Button.Wrapper>
                </Fragment>
            ))}

        </div>
    )
}