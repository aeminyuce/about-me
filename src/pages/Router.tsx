import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// misc
import PageTitle from '../views/PageTitle';
import PageLoader from '../views/PageLoader';

// routes
const Home = lazy(() => import( /* webpackChunkName: "Home" */ "./Home" ));
const Dashboard = lazy(() => import( /* webpackChunkName: "Dashboard" */ "./Dashboard" ));

export default function Router() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path='/*' element={
                    <PageTitle title='About Me'><Home /></PageTitle>
                } />
                <Route path='/dashboard' element={
                    <PageTitle title='Dashboard'><Dashboard /></PageTitle>
                } />
            </Routes>
        </Suspense>
    );
}
