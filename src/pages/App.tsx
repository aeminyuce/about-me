import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { TopButton, SquircleMask } from 'uilab';

// misc
import { storedData } from '../stores/Storages';
import StoreProvider from '../stores/StoreContext';

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
