import * as React from 'react';
import Heading from 'uilab/react/Heading';

// misc
import { useStoreContext } from '../../states/StoreContext';

export const Title = () => {
    const { api } = useStoreContext();
    const title = api?.lab?.intro?.title;

    return (
        <Heading as='h1' className='ui-font-light ui-font-48 ui-m-30-v'>
            {title}
        </Heading>
    )
}

export const SubTitle = () => {
    const { api } = useStoreContext();
    const subTitle = api?.lab?.intro?.subTitle;

    return (
        <Heading as='h3' className='ui-font-36 ui-m-30-b ui-theme-greenYellow ui-text'>
            {subTitle}
        </Heading>
    )
}