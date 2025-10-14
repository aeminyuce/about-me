import * as React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// views
import PageTitle from './PageTitle';
import PageLoader from './PageLoader';

// utils
import {
    Home,
    Dashboard,
} from '../utils/RouteComponents';

export default function RoutePaths() {
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
