import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import TopButton from '@ui/TopButton';
import SquircleMask from '@ui/SquircleMask';

// misc
import { storedData } from '@stores/Storages';
import StoreProvider from '@stores/StoreContext';

export default function () {
    return (
        <StoreProvider initialValue={storedData}>

            <Suspense>
                <Outlet />
            </Suspense>

            <TopButton />
            <SquircleMask />

        </StoreProvider>
    )
}
