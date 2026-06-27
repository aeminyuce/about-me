import * as React from 'react';
import { Fragment, memo, useState, useCallback } from 'react';
import Button from 'uilab/react/Button';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import type { IconsListProps, IconDetailsProps } from '../../models/Icons';
import IconDetailModal, { showIconDetail } from './IconDetailModal';

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
    const [ details, setDetails ] = useState<IconDetailsProps>();

    const { iconSize, api } = useStoreContext();
    const { iconsList } = props;

    const iconsSuffix = api?.icons?.info?.iconsSuffix;

    // sprites
    const spritesList: Record<string, string> = {
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

    // memoize expensive unit:
    const handleClick = useCallback((props: IconDetailsProps) => {

        // onClick is recreated on every render: breaks memo!
        const { name, category, spin } = props;

        setDetails({ name: name, category, list: spritesList[category as string], spin });
        showIconDetail();

    }, [spritesList]);

    const IconItem = memo((props: IconDetailsProps) => {

        // we need memo only for repeated unit:
        // each icon item has stable props but not onClick (stabled with useCallback)
        const { name, list, spin, onClick } = props;

        return (
            <Button ghost multi noease onClick={onClick}>
                <SvgIcon as='sprite' src={list} symbolId={name} opacity='no' animate={spin} />
                <span>{name}</span>
            </Button>
        )

    });

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
                            const spin = name.includes('loader-') ? 'spin' : undefined;

                            return (
                                <IconItem
                                    key={name}
                                    name={name}
                                    category={item.category}
                                    list={spritesList[item.category]}
                                    spin={spin}
                                    onClick={() => handleClick({ name, category: item.category, spin })}
                                />
                            )
                        })}

                    </Button.Wrapper>
                </Fragment>
            ))}

            <IconDetailModal {...details} />

        </div>
    )
}