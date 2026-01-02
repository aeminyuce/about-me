import * as React from 'react';

// misc
import { useStoreContext } from '../../states/StoreContext';
import HomeProfile from './HomeProfile';
import MyFocus from './MyFocus';

export default function () {
    const { apiResponse } = useStoreContext();

    return apiResponse?.home?.aboutMe && (
        <>
        <HomeProfile />
        {apiResponse?.home?.aboutMe?.myFocus && <MyFocus />}
        </>
    )
}