import React from 'react';
import Avatar from '@ui/Avatar';
import Image from '@ui/Image';

// misc
import { useStoreContext } from '@stores/StoreContext';

export default function () {
    const { api } = useStoreContext();

    const general = api?.general;
    const profileImage = general?.profileImage;

    if (profileImage) return (
        <Avatar size='lg' className='ui-squircle'>
            <Image fetchPriority='high' src={profileImage} alt={`${general?.fullName} | ${general?.jobTitle}`} aspect='square' />
        </Avatar>
    )
}