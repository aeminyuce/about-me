import * as React from 'react';
import { useOutlet } from "react-router-dom";
import Grid from 'uilab/react/Grid';

// misc
import AboutMe from '../components/common/AboutMe';
import HomeNav from '../components/home/HomeNav';
import { useStoreContext } from '../states/StoreContext';
import Featured from '../components/home/Featured';
import Profile from '../components/home/Profile';
import { Reports, ReportsList } from '../components/home/Reports';
import { People, PeopleMore } from '../components/home/People';
import Events from '../components/home/Events';

// styles
import '../assets/home.less';

export default function () {
    const outlet = useOutlet();
    const { apiResponse } = useStoreContext();

    return (
        <>
        {/* about me */}
        <AboutMe />

        {/* nav */}
        <HomeNav />

        {/* contents */}
        {outlet}

        {/* featured */}
        {!outlet && apiResponse?.home && <Featured /> }
        </>
    );
}