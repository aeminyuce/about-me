import * as React from 'react';
import { useOutlet } from "react-router-dom";

// misc
import AboutMe from '../components/home/AboutMe';
import HomeNav from '../components/home/HomeNav';
import { useStoreContext } from '../states/StoreContext';
import Featured from './home/Featured';

// styles
import '../assets/home.less';

export default function () {
    const outlet = useOutlet();
    const { apiResponse } = useStoreContext();

    return (
        <>
        {/* about me */}
        {apiResponse?.home?.aboutMe && <AboutMe />}

        {/* nav */}
        {apiResponse?.home?.nav && <HomeNav />}

        {/* contents */}
        {outlet}

        {/* featured */}
        {!outlet && apiResponse?.home_featured && <Featured /> }
        </>
    );
}