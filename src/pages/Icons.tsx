import React from 'react';
import Grid from '@ui/Grid';

// misc
import { useStoreContext } from '@stores/StoreContext';
import type { IconsListProps } from '@models/Icons';
import IconsSkeleton from '@skeleton/Icons';
import MyAvatar from '@components/common/MyAvatar';
import Title from '@components/icons/Title';
import Images from '@components/icons/Images';
import Texts from '@components/icons/Texts';
import SizeChanger from '@components/icons/SizeChanger';
import List from '@components/icons/List';

// assets
const iconsList = require('uilab-icons/icons-list.json') as IconsListProps[];

// styles
import '@assets/icons';

export default function () {
    const { api } = useStoreContext();

    const icons = api?.icons;
    const info = icons?.info;

    if (!icons) return <IconsSkeleton />

    return (
        <Grid.Row className='ui-sm-no-p ui-align-c ui-p-30-v'>
            <Grid.Col size={12}>
                {info?.title &&
                    <>
                    <MyAvatar />
                    <Title />
                    </>
                }
                {(info?.image1 || info?.image2) && <Images />}
                {(info?.text || info?.sizeChangerSuffix || info?.sizeChangerPrefix) &&
                    <Texts iconsList={iconsList} />
                }
                {icons?.sizes && <SizeChanger />}
                {(info?.iconsSuffix) && <List iconsList={iconsList} />}
            </Grid.Col>
        </Grid.Row>
    )
}