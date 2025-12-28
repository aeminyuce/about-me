import * as React from 'react';

// misc
import { useStoreContext } from '../../states/StoreContext';
import Profile from './Profile';
import MyFocus from './MyFocus';

export default function () {
    const { apiResponse } = useStoreContext();

    return apiResponse?.aboutMe && (
        <>
        <Profile />
        {apiResponse?.aboutMe?.myFocus && <MyFocus />}
        </>
    )
}