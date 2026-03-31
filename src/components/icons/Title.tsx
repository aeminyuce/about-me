import * as React from 'react';
import Heading from 'uilab/react/Heading';

// misc
import { useStoreContext } from '../../stores/StoreContext';

export default function () {
    const { api } = useStoreContext();
    const title = api?.icons?.info?.title;

    return (
        <Heading as='h1' className='ui-font-light ui-font-48 ui-m-30-v'>
            {title}
        </Heading>
    )
}