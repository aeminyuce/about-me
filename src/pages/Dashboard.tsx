import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import AboutMe from '../components/common/AboutMe';
import Header from '../components/common/Header';
import Nav from '../components/home/HomeNav';
import Footer from '../components/common/Footer';

// styles
import '../assets/dashboard.less';

export default function () {
    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

                {/* about me */}
                <AboutMe />

                {/* nav */}
                <Nav />

                {/* dahsboard */}
                <Grid.Row>
                    <Grid.Col size={12}>
                        Dashboard contents!
                    </Grid.Col>
                </Grid.Row>

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}
