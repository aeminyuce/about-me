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
    const { apiResponse } = useStoreContext();

    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

                {apiResponse?.lab &&
                    <Grid.Static>
                        <Grid.Row>
                            <Grid.Col size={12} className='lab-content ui-p-30-v'>

                                {/* contents */}
                                <Outlet />

                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Col size={272} order={{ when: 'md', position: 'first'}}>

                            {/* menu */}
                            {apiResponse?.lab?.menu && <LabMenu />}

                        </Grid.Col>
                    </Grid.Static>
                }

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}