import { lazy, Suspense, Fragment, memo, useState, useCallback } from 'react';
import Button from '@ui/Button';
import Heading from '@ui/Heading';
import Item from '@ui/Item';
import Modal from '@ui/Modal';
import SvgIcon from '@ui/SvgIcon';

// misc
const IconDetailModal = lazy(() => import('./IconDetailModal'));

import { useStoreContext } from '@stores/StoreContext';
import type { IconsListProps, IconDetailsProps } from '@models/Icons';
import { showIconDetail } from '@helpers/Icons';
import IconDetailSkeleton from '@skeleton/IconDetail';

// assets
import SpriteGeneral from '@sprite/general.svg?inline';
import SpriteTouch from '@sprite/touch.svg?inline';
import SpriteMedia from '@sprite/media.svg?inline';
import SpriteKitchen from '@sprite/kitchen.svg?inline';
import SpriteRealEstate from '@sprite/real-estate.svg?inline';
import SpriteWeather from '@sprite/weather.svg?inline';
import SpriteCommerce from '@sprite/commerce.svg?inline';
import SpriteFiles from '@sprite/files.svg?inline';
import SpriteSocial from '@sprite/social.svg?inline';
import SpriteBrands from '@sprite/brands.svg?inline';

export default function (props: any) {
    const { api } = useStoreContext();
    const [ details, setDetails ] = useState<IconDetailsProps>();

    const { iconsList } = props;
    const iconsSuffix = api?.icons?.info?.iconsSuffix;

    // sprites
    const spritesList: Record<string, string> = Object.freeze({
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
    });

    const handleClick = useCallback((props: IconDetailsProps) => {

        // onClick has dynamic action
        const { name, category } = props;

        setDetails({ name: name, category, list: spritesList[category as string] });
        showIconDetail();

    }, [spritesList]);

    return (
        <Item as='div' className='iconslist-icons ui-icons-no-opacity ui-icons-xl'>

            {iconsList.map((item: IconsListProps) => (
                <Fragment key={item.category}>
                    <Heading as='h2'>
                        <Item as='span' className='ui-inline-block'>
                            {item.category} {iconsSuffix}
                        </Item>
                        <Button as='span' size='xs' className='ui-m-10-l ui-p-10-h ui-circle'>
                            {item.length} {iconsSuffix}
                        </Button>
                    </Heading>
                    <Button.Wrapper as='div' ease='1st' className='ui-highlight ui-round-1st'>

                        {item.icons.map((name: string) => {
                            const spin = name.includes('loader-') ? 'spin' : undefined;

                            return (
                                <IconItem
                                    key={name}
                                    name={name}
                                    category={item.category}
                                    list={spritesList[item.category]}
                                    spin={spin}
                                    onClick={() => handleClick({ name, category: item.category })}
                                />
                            )
                        })}

                    </Button.Wrapper>
                </Fragment>
            ))}

            <Modal as='div' id='iconDetailModal'>
                <Modal.Container className='ui-p-30'>

                    {details?.name &&
                        <Suspense fallback={<IconDetailSkeleton />}>
                            <IconDetailModal {...details} />
                        </Suspense>
                    }

                </Modal.Container>
            </Modal>
        </Item>
    )
}

const IconItem = memo((props: IconDetailsProps) => {
    // when icon sizes selected, prevent re-rendering of the repeated icons
    const { name, list, spin, onClick } = props;

    return (
        <Button ghost multi noease onClick={onClick}>
            <SvgIcon as='sprite' src={list} symbolId={name} animate={spin} />
            <Item as='span'>{name}</Item>
        </Button>
    )
});