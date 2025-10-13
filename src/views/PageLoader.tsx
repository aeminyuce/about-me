import * as React from 'react';
import Loadingmask from 'uilab/react/Loadingmask';

export default function PageLoader() {
    Loadingmask('#page-loader');
    return <div id='page-loader' className='ui-set-fixed ui-set-all'></div>;
}