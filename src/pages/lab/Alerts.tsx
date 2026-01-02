import * as React from 'react';

// misc
import { useStoreContext } from '../../states/StoreContext';

export default function () {
    const { apiResponse } = useStoreContext();

    return (
        <>
        alerts
        </>
    );
}
