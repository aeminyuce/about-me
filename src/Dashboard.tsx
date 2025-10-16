import * as React from 'react';
import Grid from 'uilab/react/Grid';

// views
import AboutMe from './views/AboutMe';
import Header from './views/Header';
import Nav from './views/Nav';
import Footer from './views/Footer';

export default function () {
    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main'>
            <Grid.Container fixed='xl' as='div' noGutter='lg'>

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
