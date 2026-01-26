import * as React from 'react';

// misc
import { useStoreContext } from '../../states/StoreContext';
import HomeProfile from './HomeProfile';
import MyFocus from './MyFocus';

export default function () {
    const { api } = useStoreContext();
    const aboutMe = api?.home?.aboutMe;

    return aboutMe && (
        <>
        <HomeProfile />
        {aboutMe?.myFocus && <MyFocus />}
        </>
    )
}