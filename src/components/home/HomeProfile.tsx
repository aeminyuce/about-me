import React from 'react';
import Grid from '@ui/Grid';
import Heading from '@ui/Heading';
import Item from '@ui/Item';
import SvgIcon from '@ui/SvgIcon';

// misc
import { useStoreContext } from '@stores/StoreContext';
import MyAvatar from '../common/MyAvatar';
import GetInTouchButton from '../common/GetInTouchButton';
import PersonalSkills from './PersonalSkills';

// assets
import { IconMarker } from '@icon/general/marker';

export default function () {
    const { api } = useStoreContext();
    const general = api?.general;

    return (
        <Grid.Row fluid='sm' hGap='lg' className='ui-m-15-v'>
            <Grid.Col size={5} md={2} className='ui-align-r ui-sm-align-c'>
                <MyAvatar />
            </Grid.Col>
            <Grid.Col size={7} md={10} className='ui-sm-align-c'>
                <Heading as='h1' className='ui-font-30 ui-font-bold'>
                    {general?.fullName}
                </Heading>

                <Heading as='h2' className='ui-font-16 ui-font-regular ui-m-5-b ui-block'>
                    {general?.jobTitle}
                </Heading>

                <SvgIcon as='js' src={IconMarker} size='sm' r={5} />
                <Item as='span' className='ui-font-16 ui-inline-block'>{api?.home?.aboutMe?.location}</Item>

                <PersonalSkills />
                <GetInTouchButton />
            </Grid.Col>
        </Grid.Row>
    )
}