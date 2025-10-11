import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// shared assets
import 'uilab/less/ui.less';
import 'uilab/js/ui.js';

// styles
import './assets/styles.less';

// app
import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
