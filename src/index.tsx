import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

// shared assets
import 'uilab/less/ui';
import 'uilab/js/ui';

// styles
import './assets/styles';

// misc
import { router } from './pages/Router';

const app = document.getElementById('app') as HTMLElement;
const root = createRoot(app);

root.render(<RouterProvider router={router} />);