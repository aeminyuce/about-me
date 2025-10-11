import * as React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// views
import PageTitle from './PageTitle';

// utils
import {
    Home,
} from '../utils/RouteComponents';

export default function RoutePaths() {
    return (
        <Suspense>
            <Routes>
                <Route path='/*' element={
                    <PageTitle title='About Me'><Home /></PageTitle>
                } />
            </Routes>
        </Suspense>
    );
}
