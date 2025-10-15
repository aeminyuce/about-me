import * as React from 'react';
import Button from 'uilab/react/Button';
import Calendar from 'uilab/react/Calendar';
import Card from 'uilab/react/Card';
import Dropdown from 'uilab/react/Dropdown';
import Grid from 'uilab/react/Grid';
import ProgressBar from 'uilab/react/ProgressBar';
import SvgIcon from 'uilab/react/SvgIcon';

// views
import AboutMe from './views/AboutMe';
import Header from './views/Header';
import Nav from './views/Nav';
import Footer from './views/Footer';

// utils
import { useStoreContext } from './views/StoreContext';

// assets
import { IconEllipsisH } from 'uilab-icons/react/general/ellipsis-h';

export default function () {
    const { theme, apiResponse } = useStoreContext();
    const calendarData = apiResponse?.calendar;

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

                    <Grid.Row className={theme ? ` ${theme}` : null}>
                        <Grid.Col size={6}>
                            ...
                        </Grid.Col>
                        <Grid.Col size={3}>

                            <Grid.Row hGap='xs' vGap='no' fluid='no'>
                                <Grid.Col size={6}>

                                    <Card className='ui-p-15 ui-round-l ui-shadow-sm'>
                                        <Grid.Static fluid='no' className='ui-font-condensed'>
                                            <Grid.Row hGap='no' vGap='md'>
                                                <Grid.Col size={12}>
                                                    <div className='ui-font-18 ui-m-10-b'>Active Reports</div>
                                                    <div className='ui-font-semibold ui-color-black-25'>74% efficiency</div>
                                                </Grid.Col>
                                            </Grid.Row>
                                            <Grid.Col size={100} className='ui-align-r'>
                                                <div className='ui-font-38 ui-m-10-t ui-p-3-t'>19</div>
                                            </Grid.Col>
                                        </Grid.Static>
                                        <ProgressBar className='ui-m-15-t ui-round'>
                                            <ProgressBar.Item percent={74} className='ui-fill-dark-100'/>
                                        </ProgressBar>
                                    </Card>

                                </Grid.Col>
                                <Grid.Col size={6}>

                                    <Card className='ui-p-15 ui-round-r ui-shadow-sm'>
                                        <Grid.Static fluid='no' className='ui-font-condensed'>
                                            <Grid.Row hGap='no' vGap='md'>
                                                <Grid.Col size={12}>
                                                    <div className='ui-font-18 ui-m-10-b'>Finished Reports</div>
                                                    <div className='ui-font-semibold ui-color-black-25'>58% efficiency</div>
                                                </Grid.Col>
                                            </Grid.Row>
                                            <Grid.Col size={100} className='ui-align-r'>
                                                <div className='ui-font-38 ui-m-10-t ui-p-3-t'>106</div>
                                            </Grid.Col>
                                        </Grid.Static>
                                        <ProgressBar className='ui-m-15-t ui-round'>
                                            <ProgressBar.Item animate stripe='light' percent={58} className='ui-fill-dark-100'/>
                                        </ProgressBar>
                                    </Card>

                                </Grid.Col>
                            </Grid.Row>

                        </Grid.Col>
                        <Grid.Col size={3}>

                            <Card className='ui-p-15 ui-round ui-shadow-sm'>
                                <Dropdown align='l' className='ui-float-r'>
                                    <Button square ghost className='ui-round'>
                                        <SvgIcon as='js' src={IconEllipsisH} />
                                    </Button>
                                    <Dropdown.Menu className='ui-color-black ui-inline-block-2nd ui-round ui-shadow-lg ui-cursor-pointer'>
                                        <Dropdown.Item>Add to your calendar</Dropdown.Item>
                                        <Dropdown.Item>See all events</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <h4 className="ui-h4 ui-align-l ui-m-10-t">Events</h4>
                                <Calendar
                                    className='ui-round ui-shadow-sm'
                                    data={{ date: calendarData?.eventsDate, json: JSON.stringify(calendarData?.events) }}
                                />
                            </Card>

                        </Grid.Col>
                    </Grid.Row>

                </Grid.Container>
            </Grid.Container>

            {/* footer */}
            <Footer />
        </>
    );
}
