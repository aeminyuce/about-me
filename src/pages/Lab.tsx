import * as React from 'react';
import { useOutlet } from "react-router-dom";
import Grid from 'uilab/react/Grid';

// misc
import Header from '../components/common/Header';
import LabIntro from '../components/lab/Intro';
import LabMenu from '../components/lab/Menu';
import Footer from '../components/common/Footer';
import { useStoreContext } from '../states/StoreContext';

// styles
import '../assets/lab.less';

export default function () {
    const { apiResponse } = useStoreContext();
    const outlet = useOutlet();

    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main' noGutter='all' className='ui-m-30-b'>
            <Grid.Container fixed='xl' as='div'>

                {/* lab */}
                {apiResponse?.lab &&
                    <Grid.Static>
                        <Grid.Row>
                            <Grid.Col size={12} className='lab-content ui-p-30-v'>

                                {outlet}
                                {!outlet && apiResponse?.lab?.intro && <LabIntro />}

                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Col size={272} order={{ when: 'md', position: 'first'}}>

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
