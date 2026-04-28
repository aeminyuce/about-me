import * as React from 'react';
import Avatar from 'uilab/react/Avatar';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import GetImage from './GetImage';

export default function () {
    const { api } = useStoreContext();

    const general = api?.general;
    const profileImage = general?.profileImage;

    if (profileImage) return (
        <Avatar size='lg' className='ui-circle'>
            <GetImage fetchPriority='high' src={profileImage} alt={`${general?.fullName} | ${general?.jobTitle}`} aspect='square' />
        </Avatar>
    )
}