import * as React from 'react';
import Heading from 'uilab/react/Heading';

// misc
import { useStoreContext } from '../../stores/StoreContext';

export const Title = () => {
    const { api } = useStoreContext();

    return (
        <Heading as='h1' className='ui-font-light ui-font-48 ui-m-30-v'>
            {api?.lab?.intro?.title}
        </Heading>
    )
}

export const SubTitle = () => {
    const { api } = useStoreContext();

    return (
        <Heading as='h3' className='ui-font-36 ui-m-30-b ui-theme-greenYellow ui-text'>
            {api?.lab?.intro?.subTitle}
        </Heading>
    )
}