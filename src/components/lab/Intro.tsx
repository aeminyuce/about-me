import * as React from 'react';

// misc
import { useStoreContext } from '../../states/StoreContext';

export default function() {
    const { apiResponse } = useStoreContext();
    const menu = apiResponse?.lab?.menu;

    return (
        <div className='lab-content ui-align-c ui-p-30-v ui-md-no-p'>
            <h1 className='ui-h1 ui-font-light'>A modular design system.</h1>
            <h4 className='ui-h4 ui-font-bold ui-text'>For developing web interfaces fastly!</h4>
            <p className='ui-font-18 ui-font-readable ui-p-30'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum vulputate tincidunt. Donec fringilla vehicula quam, eget rutrum dui tempus nec. Etiam eu hendrerit felis, eget euismod leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt facilisis mattis. In sed purus in elit aliquam mollis. Ut ligula felis, tempor nec convallis ac, tempus sit amet lectus. Duis non ipsum ut nulla auctor tempor eget et enim. Nulla facilisi. Donec ac purus mauris. Morbi in mollis risus, tincidunt imperdiet nibh. Duis ullamcorper pellentesque nibh. Nulla feugiat condimentum elit posuere sodales. Mauris euismod mauris erat, id facilisis dolor luctus eget.
            </p>
        </div>
    )
}