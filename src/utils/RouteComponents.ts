import { lazy } from 'react';

export const Home = lazy(() => import( /* webpackChunkName: "Home" */ "../Home" ));
export const Dashboard = lazy(() => import( /* webpackChunkName: "Dashboard" */ "../Dashboard" ));
