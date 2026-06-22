import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

// shared assets
import 'uilab/less/ui.less';
import 'uilab/js/ui.js';

// styles
import './assets/styles.less';

// misc
import App from './App';
import ErrorBoundary from './pages/error/ErrorBoundary';

const app = document.getElementById('app') as HTMLElement;
const root = createRoot(app);

const router = createBrowserRouter([{
    path: '*',
    ErrorBoundary: ErrorBoundary,
    element: <App />
}]);

root.render(<RouterProvider router={router} />);