import * as React from 'react';
import Avatar from 'uilab/react/Avatar';
import Image from 'uilab/react/Image';

// misc
import { useStoreContext } from '../../stores/StoreContext';

export default function () {
    const { api } = useStoreContext();

    const general = api?.general;
    const profileImage = general?.profileImage;

    if (profileImage) return (
        <Avatar size='lg' className='ui-circle'>
            <Image fetchPriority='high' src={profileImage} alt={`${general?.fullName} | ${general?.jobTitle}`} aspect='square' />
        </Avatar>
    )
}