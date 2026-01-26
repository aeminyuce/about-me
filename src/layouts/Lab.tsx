import * as React from 'react';
import { Outlet } from "react-router-dom";
import Grid from 'uilab/react/Grid';

// misc
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import LabMenu from '../components/lab/Menu';
import { useStoreContext } from '../states/StoreContext';

// styles
import '../assets/lab.less';

export default function () {
    const { api } = useStoreContext();
    const menu = api?.lab?.menu;

    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

                <Grid.Row>
                    <Grid.Static>
                        <Grid.Row>
                            <Grid.Col size={12} className='lab-content ui-p-30-v'>

                                {/* contents */}
                                <Outlet />

                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Col size={272} className='ui-p-10-h'>

                            {/* menu */}
                            {menu && <LabMenu />}

                        </Grid.Col>
                    </Grid.Static>
                </Grid.Row>

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}