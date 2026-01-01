import * as React from 'react';

// misc
import { useStoreContext } from '../../states/StoreContext';

// styles
import '../../assets/lab.less';

export default function () {
    const { apiResponse } = useStoreContext();

    return (
        <>
        alerts
        </>
    );
}
