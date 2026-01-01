import * as React from 'react';
import { useOutlet } from "react-router-dom";
import Grid from 'uilab/react/Grid';

// misc
import LabIntro from '../components/lab/Intro';
import LabMenu from '../components/lab/Menu';
import { useStoreContext } from '../states/StoreContext';

// styles
import '../assets/lab.less';

export default function () {
    const outlet = useOutlet();
    const { apiResponse } = useStoreContext();

    return (
        <>
        {apiResponse?.lab &&
            <Grid.Static>
                <Grid.Row>
                    <Grid.Col size={12} className='lab-content ui-p-30-v'>

                        {/* contents */}
                        {outlet}

                        {/* Intro */}
                        {!outlet && apiResponse?.lab?.intro && <LabIntro />}

                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={272} order={{ when: 'md', position: 'first'}}>

                    {apiResponse?.lab?.menu && <LabMenu />}

                </Grid.Col>
            </Grid.Static>
        }
        </>
    );
}
