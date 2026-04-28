import * as React from 'react';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { GetInTouchButtons } from '../common/GetInTouchModal';
import { useStoreContext } from '../../stores/StoreContext';
import MyAvatar from '../common/MyAvatar';
import PersonalSkills from './PersonalSkills';

// assets
import { IconMarker } from 'uilab-icons/react/general/marker';

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

                <SvgIcon as='js' src={IconMarker} size='sm' className='ui-m-5-r' />
                <span className='ui-font-16 ui-inline-block'>{api?.home?.aboutMe?.location}</span>

                <PersonalSkills />
                <GetInTouchButtons />
            </Grid.Col>
        </Grid.Row>
    )
}