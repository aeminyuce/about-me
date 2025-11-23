import * as React from 'react';

// misc
import { useStoreContext } from '../../states/StoreContext';
import Profile from './Profile';
import PersonalSkills from './PersonalSkills';

export default function () {
    const { apiResponse } = useStoreContext();

    return apiResponse?.aboutMe && (
        <>
        <Profile />
        {apiResponse?.aboutMe?.personalSkills && <PersonalSkills />}
        </>
    )
}