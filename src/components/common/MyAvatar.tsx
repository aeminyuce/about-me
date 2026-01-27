import * as React from 'react';
import Avatar from 'uilab/react/Avatar';

// misc
import { useStoreContext } from '../../states/StoreContext';
import { getImg } from '../../helpers/General';

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
                <img src={getImg(profileImage)} alt={`${fullName} | ${jobTitle}`} />
            </Avatar>
        }
        </>
    )
}