import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import Header from '../../components/common/Header';
import LabMenu from '../../components/lab/Menu';
import Footer from '../../components/common/Footer';
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
