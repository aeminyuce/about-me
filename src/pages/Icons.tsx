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
                {(info?.text || info?.sizeChangerSuffix || info?.sizeChangerPrefix || iconsList) &&
                    <Texts iconsList={iconsList} />
                }
                {api?.icons?.sizes && <SizeChanger />}
                {(info?.iconsSuffix || iconsList) && <List iconsList={iconsList} />}
            </Grid.Col>
        </Grid.Row>
    );
}