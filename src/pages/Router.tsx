import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// misc
import PageTitle from '../components/common/PageTitle';
import PageLoader from '../components/common/PageLoader';
import Page500 from '../pages/500';
import Page404 from '../pages/404';

// layouts
const Home = lazy(() => import( /* webpackChunkName: "Home" */ "../layouts/Home" ));
const Lab = lazy(() => import( /* webpackChunkName: "Lab" */ "../layouts/Lab" ));

// routes
const Featured = lazy(() => import( /* webpackChunkName: "Featured" */ "./home/Featured" ));
const Dashboard = lazy(() => import( /* webpackChunkName: "Dashboard" */ "./home/Dashboard" ));

const LabIntro = lazy(() => import( /* webpackChunkName: "lab/Intro" */ "./lab/Intro" ));
const LabAlerts = lazy(() => import( /* webpackChunkName: "lab/Alerts" */ "./lab/Alerts" ));
const LabAvatars = lazy(() => import( /* webpackChunkName: "lab/Avatars" */ "./lab/Avatars" ));
const LabBreadcrumbs = lazy(() => import( /* webpackChunkName: "lab/Breadcrumbs" */ "./lab/Breadcrumbs" ));
const LabButtons= lazy(() => import( /* webpackChunkName: "lab/LabButtons" */ "./lab/Buttons" ));

export default function () {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/* home pages */}
                <Route path='/' element={<Home />}>

                    <Route index element={
                        <PageTitle title='About Me'><Featured /></PageTitle>
                    }/>
                    <Route path='dashboard' element={
                        <PageTitle title='Dashboard'><Dashboard /></PageTitle>
                    }/>

                </Route>

                {/* lab pages */}
                <Route path='/lab' element={<Lab />}>

                    <Route index element={
                        <PageTitle title='Lab'><LabIntro /></PageTitle>}
                    />
                    <Route path='alerts' element={
                        <PageTitle title='Alerts | Lab'><LabAlerts /></PageTitle>
                    }/>
                    <Route path='avatars' element={
                        <PageTitle title='Avatars | Lab'><LabAvatars /></PageTitle>
                    }/>
                    <Route path='breadcrumbs' element={
                        <PageTitle title='Breadcrumbs | Lab'><LabBreadcrumbs /></PageTitle>
                    }/>
                    <Route path='buttons' element={
                        <PageTitle title='Buttons | Lab'><LabButtons /></PageTitle>
                    }/>

                </Route>

                {/* error pages */}
                <Route path='500' element={
                    <PageTitle title='Server Error'><Page500 /></PageTitle>
                }/>
                <Route path='*' element={
                    <PageTitle title='Page Not Found'><Page404 /></PageTitle>
                }/>
            </Routes>
        </Suspense>
    );
}
