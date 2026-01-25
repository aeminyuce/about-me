import * as React from 'react';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { GetInTouchButtons } from '../common/GetInTouchModal';
import { useStoreContext } from '../../states/StoreContext';
import MyAvatar from '../common/MyAvatar';
import PersonalSkills from './PersonalSkills';

// assets
import { IconMarker } from 'uilab-icons/react/general/marker';

export default function () {
    const { apiResponse } = useStoreContext();

    const general = apiResponse?.general;
    const fullName = general?.fullName;
    const jobTitle = general?.jobTitle;

    const aboutMe = apiResponse?.home?.aboutMe;
    const location = aboutMe?.location;

    const personalSkills = apiResponse?.home?.aboutMe?.personalSkills;

    return (
        <Grid.Row fluid='sm' hGap='lg' className='ui-m-15-v'>
            <Grid.Col size={5} md={2} className='ui-align-r ui-sm-align-c'>
                <MyAvatar />
            </Grid.Col>
            <Grid.Col size={7} md={10} className='ui-sm-align-c'>
                {fullName &&
                    <Heading as='h1' className='ui-font-30 ui-font-bold'>
                        {fullName}
                    </Heading>
                }

                {jobTitle &&
                    <Heading as='h2' className='ui-font-16 ui-font-regular ui-m-5-b ui-block'>
                        {jobTitle}
                    </Heading>
                }

                {location &&
                    <>
                    <SvgIcon as='js' src={IconMarker} size='sm' className='ui-m-5-r' />
                    <span className='ui-font-16 ui-inline-block'>{location}</span>
                    </>
                }

                {aboutMe?.getInTouchText &&
                    <>
                    {personalSkills && <PersonalSkills />}
                    <GetInTouchButtons />
                    </>
                }
            </Grid.Col>
        </Grid.Row>
    )
}