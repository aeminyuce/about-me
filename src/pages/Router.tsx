import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// misc
import PageTitle from '../views/PageTitle';
import PageLoader from '../views/PageLoader';
import Page500 from '../views/500';
import Page404 from '../views/404';

// routes
const Home = lazy(() => import( /* webpackChunkName: "Home" */ "./Home" ));
const Dashboard = lazy(() => import( /* webpackChunkName: "Dashboard" */ "./Dashboard" ));

export default function Router() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path='/' element={
                    <PageTitle title='About Me'><Home /></PageTitle>
                } />
                <Route path='/dashboard' element={
                    <PageTitle title='Dashboard'><Dashboard /></PageTitle>
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
