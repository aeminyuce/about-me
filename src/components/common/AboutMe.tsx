import * as React from 'react';
import { Fragment } from 'react';
import Avatar from 'uilab/react/Avatar';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { ShowGetInTouch } from '../../utils/Helpers';
import { useStoreContext } from '../../states/StoreContext';

// assets
import { IconMarker } from 'uilab-icons/react/general/marker';

export default function () {
    const { apiResponse } = useStoreContext();

    return apiResponse?.aboutMe && (
        <>
        <Profile />
        {apiResponse?.aboutMe?.personalSkills && <PersonalSkills />}
        </>
    )
}

const GetInTouchButtons = () => {
    const { apiResponse } = useStoreContext();
    const getInTouchText = apiResponse?.aboutMe?.getInTouchText;

    return (
        <div className='ui-form-lg ui-ease-1st-btn'>
            <Button noease className='ui-bg-black ui-circle ui-visible-light' title={getInTouchText} onClick={ShowGetInTouch}>
                {getInTouchText}
            </Button>
            <Button noease className='ui-bg-white ui-circle ui-visible-dark' title={getInTouchText} onClick={ShowGetInTouch}>
                {getInTouchText}
            </Button>
        </div>
    )
}

const Profile = () => {
    const { apiResponse } = useStoreContext();
    const aboutMe = apiResponse?.aboutMe;

    const profileImage = aboutMe?.profileImage;
    const fullName = aboutMe?.fullName;
    const jobTitle = aboutMe?.jobTitle;
    const location = aboutMe?.location;

    return (
        <Grid.Row fluid='xs' hGap='lg' className='ui-m-30-t ui-m-5-b'>
            <Grid.Col size={5} className='ui-align-r ui-xs-align-c'>
                {profileImage &&
                    <Avatar size='lg' className='ui-circle'>
                        <img src={profileImage} alt={`${fullName || ''}${jobTitle ? ` | ${jobTitle}` : ''}`} />
                    </Avatar>
                }
            </Grid.Col>
            <Grid.Col size={7} className='ui-xs-align-c'>
                {fullName &&
                    <h1 className='ui-h1 ui-font-30 ui-font-bold ui-m-15-t'>{fullName}</h1>
                }

                {jobTitle &&
                    <span className='ui-font-16 ui-m-5-b ui-block'>{jobTitle}</span>
                }

                {location &&
                    <>
                    <SvgIcon as='js' src={IconMarker} size='sm' className='ui-m-5-r' />
                    <span className='ui-font-16 ui-inline-block'>{location}</span>
                    </>
                }

                {aboutMe?.getInTouchText &&
                    <>
                    <Spacer size={25} />
                    <GetInTouchButtons />
                    </>
                }
            </Grid.Col>
        </Grid.Row>
    )
}

const PersonalSkills = () => {
    const { apiResponse } = useStoreContext();

    return (
        <Grid.Row>
            <Grid.Col size={6} push={3} className='ui-m-30-b'>
                <p className='ui-color-black-25 ui-font-15 ui-align-c'>

                    {apiResponse?.aboutMe?.personalSkills.map((name: string, index: number, arr: string[]) => {
                        const item = `${name}${index + 1 !== arr.length ? ', ' : ''}`;
                        return <Fragment key={name}>{item}</Fragment>
                    })}

                </p>
            </Grid.Col>
        </Grid.Row>
    )
}