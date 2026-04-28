import * as React from 'react';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import type { IconsListProps } from '../../models/Icons';

export default function (props: any) {
    const { api } = useStoreContext();
    const { iconsList } = props;

    const info = api?.icons?.info;

    // get total icons length
    let totalLength = 0;

    iconsList.map((item: IconsListProps) => {
        totalLength += item.length;
    });

    return (
        <>
        <p className='ui-font-22 ui-font-readable ui-m-25-b ui-theme-greenYellow ui-text'>
            {info?.text}
        </p>
        <div className='ui-font-18 ui-opacity-half ui-m-20-b'>
            {info?.sizeChangerPrefix} {totalLength} {info?.sizeChangerSuffix}
        </div>
        </>
    )
}