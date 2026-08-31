import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

// shared assets
import '@less/ui.less';
import '@js/ui.js';

// styles
import '@assets/styles.less';

// misc
import { router } from '@pages/Router';

const app = document.getElementById('root') as HTMLElement;
const root = createRoot(app);

root.render(<RouterProvider router={router} />);