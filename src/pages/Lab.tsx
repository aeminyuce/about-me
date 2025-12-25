import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from 'uilab/react/Card';
import Grid from 'uilab/react/Grid';

// misc
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// styles
import '../assets/lab.less';

export default function () {
    return (
        <>
        {/* header */}
        <Header />

        {/* main */}
        <Grid.Container as='main' noGutter='all' className='ui-m-30-b'>
            <Grid.Container fixed='xl' as='div'>

                {/* skeleton */}
                <Grid.Static fluid='no'>
                    <Grid.Row>
                        <Grid.Col size={12}>
                            ...
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Col size={272}>
                        <Card className='lab-menu ui-p-15 ui-round ui-border ui-border-light ui-set-sticky'>
                            <ul className='ui-list-unstyled ui-list-sp-10 ui-font-hoverline-2nd'>
                                <li><Link to='#' className='ui-link'>Menu 1</Link></li>
                                <li><Link to='#' className='ui-link'>Menu 2</Link></li>
                                <li><Link to='#' className='ui-link'>Menu 3</Link></li>
                            </ul>
                        </Card>
                    </Grid.Col>
                </Grid.Static>

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}
