import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

// misc
import App from './App';
import PageApiError from './error/ApiError';
import Page500 from './error/500';
import Page404 from './error/404';
import ErrorBoundary from './error/ErrorBoundary';
import PageTitle from '../components/common/PageTitle';

// layouts
const Default = lazy(() => import( /* webpackChunkName: 'Default' */ '../layouts/Default' ));
const Error = lazy(() => import( /* webpackChunkName: 'Error' */ '../layouts/Error' ));
const Home = lazy(() => import( /* webpackChunkName: 'Home' */ '../layouts/Home' ));
const Lab = lazy(() => import( /* webpackChunkName: 'Lab' */ '../layouts/Lab' ));

// routes
const Featured = lazy(() => import( /* webpackChunkName: 'Featured' */ './home/Featured' ));
const Dashboard = lazy(() => import( /* webpackChunkName: 'Dashboard' */ './home/Dashboard' ));

const LabIntro = lazy(() => import( /* webpackChunkName: 'lab/Intro' */ './lab/Intro' ));
const LabAlerts = lazy(() => import( /* webpackChunkName: 'lab/Alerts' */ './lab/Alerts' ));
const LabAvatars = lazy(() => import( /* webpackChunkName: 'lab/Avatars' */ './lab/Avatars' ));
const LabBreadcrumbs = lazy(() => import( /* webpackChunkName: 'lab/Breadcrumbs' */ './lab/Breadcrumbs' ));
const LabButtons = lazy(() => import( /* webpackChunkName: 'lab/Buttons' */ './lab/Buttons' ));
const LabCalendar = lazy(() => import( /* webpackChunkName: 'lab/Calendar' */ './lab/Calendar' ));
const LabCard = lazy(() => import( /* webpackChunkName: 'lab/Card' */ './lab/Card' ));
const LabCarousel = lazy(() => import( /* webpackChunkName: 'lab/Carousel' */ './lab/Carousel' ));
const LabCharts = lazy(() => import( /* webpackChunkName: 'lab/Charts' */ './lab/Charts' ));

const Icons= lazy(() => import( /* webpackChunkName: 'Icons' */ './Icons' ));
const Blog= lazy(() => import( /* webpackChunkName: 'Blog' */ './Blog' ));

export const router = createBrowserRouter([
    // app
    {
        element: <App />,
        errorElement: <ErrorBoundary />,
        loader: () => ({ load: 'page' }),
        children: [

            // home layout
            {
                path: '/',
                element: <Home />,
                loader: () => ({ load: 'home' }),
                children: [
                    {
                        index: true,
                        element: (<PageTitle title="About Me"><Featured /></PageTitle>),
                        loader: () => ({ load: 'home_featured' }),
                    },
                    {
                        path: 'dashboard',
                        element: (<PageTitle title="Dashboard"><Dashboard /></PageTitle>),
                    },
                ],
            },

            // default layout
            {
                element: <Default />,
                children: [
                    {
                        path: 'icons',
                        element: (<PageTitle title="I Love Icons"><Icons /></PageTitle>),
                        loader: () => ({ load: 'icons' }),
                    },
                    {
                        path: 'blog',
                        element: <Blog />, // page title creates dynamically in component
                        loader: ({ request }) => {
                            const url = new URL(request.url);
                            const post = url.searchParams.get('post');

                            return {
                                load: post ? 'post' : 'blog',
                                post: post,
                            };
                        },
                    },
                ],
            },

            // lab layout
            {
                path: '/lab',
                element: <Lab />,
                loader: () => ({ load: 'lab' }),
                children: [
                    {
                        index: true,
                        element: (<PageTitle title="Lab"><LabIntro /></PageTitle>),
                    },
                    {
                        path: 'alerts',
                        element: (<PageTitle title="Alerts | Lab"><LabAlerts /></PageTitle>),
                        loader: () => ({ load: 'lab_alerts' }),
                    },
                    {
                        path: 'avatars',
                        element: (<PageTitle title="Avatars | Lab"><LabAvatars /></PageTitle>),
                        loader: () => ({ load: 'lab_avatars' }),
                    },
                    {
                        path: 'breadcrumbs',
                        element: (<PageTitle title="Breadcrumbs | Lab"><LabBreadcrumbs /></PageTitle>),
                        loader: () => ({ load: 'lab_breadcrumbs' }),
                    },
                    {
                        path: 'buttons',
                        element: (<PageTitle title="Buttons | Lab"><LabButtons /></PageTitle>),
                        loader: () => ({ load: 'lab_buttons' }),
                    },
                    {
                        path: 'calendar',
                        element: (<PageTitle title="Calendar | Lab"><LabCalendar /></PageTitle>),
                        loader: () => ({ load: 'lab_calendar' }),
                    },
                    {
                        path: 'card',
                        element: (<PageTitle title="Card | Lab"><LabCard /></PageTitle>),
                        loader: () => ({ load: 'lab_card' }),
                    },
                    {
                        path: 'carousel',
                        element: (<PageTitle title="Carousel | Lab"><LabCarousel /></PageTitle>),
                        loader: () => ({ load: 'lab_carousel' }),
                    },
                    {
                        path: 'charts',
                        element: (<PageTitle title="Charts | Lab"><LabCharts /></PageTitle>),
                        loader: () => ({ load: 'lab_charts' }),
                    },
                ],
            },

            // error layout
            {
                element: <Error />,
                children: [
                    {
                        path: 'api-error',
                        element: (<PageTitle title="API Error"><PageApiError /></PageTitle>),
                    },
                    {
                        path: '500',
                        element: (<PageTitle title="Server Error"><Page500 /></PageTitle>),
                    },
                    {
                        path: '404',
                        element: (<PageTitle title="Not Found"><Page404 /></PageTitle>),
                    },
                    {
                        path: '*',
                        element: (<PageTitle title="Not Found"><Page404 /></PageTitle>),
                    },
                ],
            },

        ]
    },
]);