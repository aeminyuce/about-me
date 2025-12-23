import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// misc
import PageTitle from '../components/common/PageTitle';
import PageLoader from '../components/common/PageLoader';
import Page500 from '../pages/500';
import Page404 from '../pages/404';

// routes
const Home = lazy(() => import( /* webpackChunkName: "Home" */ "./Home" ));
const Dashboard = lazy(() => import( /* webpackChunkName: "Dashboard" */ "./Dashboard" ));
const UiLab = lazy(() => import( /* webpackChunkName: "UiLab" */ "./UiLab" ));

export default function () {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path='/' element={
                    <PageTitle title='About Me'><Home /></PageTitle>
                } />
                <Route path='/dashboard' element={
                    <PageTitle title='Dashboard'><Dashboard /></PageTitle>
                } />

                <Route path='/uilab' element={
                    <PageTitle title='UiLab'><UiLab /></PageTitle>
                } />

                <Route path="/500" element={
                    <PageTitle title="Server Error"><Page500 /></PageTitle>
                } />
                <Route path='*' element={
                    <PageTitle title='Page Not Found'><Page404 /></PageTitle>
                } />
            </Routes>
        </Suspense>
    );
}
