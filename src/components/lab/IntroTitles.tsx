import * as React from 'react';
import Spacer from 'uilab/react/Spacer';

// misc
import { useStoreContext } from '../../states/StoreContext';

export const Title = () => {
    const { apiResponse } = useStoreContext();

    return (
        <h1 className='ui-h1 ui-font-light ui-m-30-v'>
            {apiResponse?.lab?.intro?.title}
        </h1>
    )
}

export const SubTitle = () => {
    const { apiResponse } = useStoreContext();

    return (
        <>
        <h3 className='ui-h3 ui-font-bold ui-m-30-b ui-theme-greenYellow ui-text'>
            {apiResponse?.lab?.intro?.subTitle}
        </h3>
        <Spacer size={30} />
        </>
    )
}