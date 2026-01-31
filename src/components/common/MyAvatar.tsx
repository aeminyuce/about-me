import * as React from 'react';
import Avatar from 'uilab/react/Avatar';

// misc
import { useStoreContext } from '../../states/StoreContext';
import GetImage from './GetImage';

export default function () {
    const { api } = useStoreContext();
    const general = api?.general;

    const profileImage = general?.profileImage;
    const fullName = general?.fullName || '';
    const jobTitle = general?.jobTitle || '';

    return (
        <>
        {profileImage &&
            <Avatar size='lg' className='ui-circle'>
                <GetImage src={profileImage} alt={`${fullName} | ${jobTitle}`} />
            </Avatar>
        }
        </>
    )
}