import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// misc
import PageTitle from '../components/common/PageTitle';
import PageLoader from '../components/common/PageLoader';
import Page500 from '../pages/500';
import Page404 from '../pages/404';

// layouts
const Default = lazy(() => import( /* webpackChunkName: "Default" */ "../layouts/Default" ));
const Blank = lazy(() => import( /* webpackChunkName: "Blank" */ "../layouts/Blank" ));

// routes
const Home = lazy(() => import( /* webpackChunkName: "Home" */ "./Home" ));
const Dashboard = lazy(() => import( /* webpackChunkName: "Dashboard" */ "./Dashboard" ));

const Lab = lazy(() => import( /* webpackChunkName: "Lab" */ "./Lab" ));
const LabAlerts = lazy(() => import( /* webpackChunkName: "lab/Alerts" */ "./lab/Alerts" ));

export default function () {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/* default pages */}
                <Route element={<Default />}>

                    {/* home pages */}
                    <Route path='/' element={<PageTitle title='About Me'><Home /></PageTitle>}>
                        <Route path='dashboard' element={
                            <PageTitle title='Dashboard'><Dashboard /></PageTitle>
                        } />
                    </Route>

                    {/* lab pages */}
                    <Route path='lab' element={<PageTitle title='Lab'><Lab /></PageTitle>}>
                        <Route path='alerts' element={
                            <PageTitle title='Lab | Alerts'><LabAlerts /></PageTitle>
                        } />
                    </Route>

                </Route>

                {/* error pages */}
                <Route path='500' element={
                    <PageTitle title='Server Error'><Page500 /></PageTitle>
                } />
                <Route path='*' element={
                    <PageTitle title='Page Not Found'><Page404 /></PageTitle>
                } />
            </Routes>
        </Suspense>
    );
}
