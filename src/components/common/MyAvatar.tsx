import * as React from 'react';
import Avatar from 'uilab/react/Avatar';

// misc
import { useStoreContext } from '../../states/StoreContext';

export default function () {
    const { apiResponse } = useStoreContext();
    const general = apiResponse?.general;

    const profileImage = general?.profileImage;
    const fullName = general?.fullName || '';
    const jobTitle = general?.jobTitle || '';

    return (
        <>
        {profileImage &&
            <Avatar size='lg' className='ui-circle'>
                <img src={`/images/${profileImage}`} alt={`${fullName} | ${jobTitle}`} />
            </Avatar>
        }
        </>
    )
}