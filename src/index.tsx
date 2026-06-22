import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

// shared assets
import 'uilab/less/ui.less';
import 'uilab/js/ui.js';

// styles
import './assets/styles.less';

// app
import App from './App';

const root = createRoot(document.getElementById('app') as HTMLElement);
const router = createBrowserRouter([{
    path: '*',
    element: <App />
}]);

root.render(<RouterProvider router={router} />);
