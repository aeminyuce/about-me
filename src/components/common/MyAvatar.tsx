import * as React from 'react';
import Avatar from 'uilab/react/Avatar';

// misc
import { useStoreContext } from '../../states/StoreContext';

export default function () {
    const { apiResponse } = useStoreContext();
    const aboutMe = apiResponse?.aboutMe;

    const profileImage = aboutMe?.profileImage;
    const fullName = aboutMe?.fullName;
    const jobTitle = aboutMe?.jobTitle;

    return (
        <>
        {profileImage &&
            <Avatar size='lg' className='ui-circle'>
                <img src={profileImage} alt={`${fullName || ''}${jobTitle ? ` | ${jobTitle}` : ''}`} />
            </Avatar>
        }
        </>
    )
}