import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// styles
import '../assets/dashboard.less';

export default function () {
    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main' noGutter='all' className='ui-m-30-b'>
            <Grid.Container fixed='xl' as='div'>

                {/* dahsboard */}
                <Grid.Row>
                    <Grid.Col size={12}>
                        UiLab contents!
                    </Grid.Col>
                </Grid.Row>

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}
