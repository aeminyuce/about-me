import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../stores/StoreContext';
import type { IconsListProps } from '../models/Icons';
import MyAvatar from '../components/common/MyAvatar';
import Title from '../components/icons/Title';
import Images from '../components/icons/Images';
import Texts from '../components/icons/Texts';
import SizeChanger from '../components/icons/SizeChanger';
import List from '../components/icons/List';

// assets
const iconsList = require('uilab-icons/icons-list.json') as IconsListProps[];

// styles
import '../../src/assets/icons.less';

export default function () {
    const { api } = useStoreContext();

    const info = api?.icons?.info;
    const title = info?.title;

    const image1 = info?.image1;
    const image2 = info?.image2;

    const text = info?.text;
    const sizeChangerPrefix = info?.sizeChangerPrefix;
    const sizeChangerSuffix = info?.sizeChangerSuffix;

    const sizes = api?.icons?.sizes;
    const iconsSuffix = info?.iconsSuffix;

    return (
        <Grid.Row className='ui-sm-no-p ui-align-c ui-p-30-v'>
            <Grid.Col size={12}>
                {title &&
                <>
                <MyAvatar />
                <Title />
                </>
                }
                {image1 && image2 && <Images />}
                {text && sizeChangerSuffix && sizeChangerPrefix && iconsList &&
                    <Texts iconsList={iconsList} />
                }
                {sizes && <SizeChanger />}
                {iconsSuffix && iconsList && <List iconsList={iconsList} />}
            </Grid.Col>
        </Grid.Row>
    );
}