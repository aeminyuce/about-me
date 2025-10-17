import * as React from 'react';
import Button from 'uilab/react/Button';
import Calendar from 'uilab/react/Calendar';
import Card from 'uilab/react/Card';
import Dropdown from 'uilab/react/Dropdown';
import DonutChart from 'uilab/react/DonutChart';
import Grid from 'uilab/react/Grid';
import ListGroup from 'uilab/react/ListGroup';
import ProgressBar from 'uilab/react/ProgressBar';
import Tab from 'uilab/react/Tab';
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
    const { theme } = useStoreContext();

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

                {/* featured */}
                <Grid.Row className={theme ? ` ${theme}` : null}>
                    <Grid.Col size={6}>
                        ...
                    </Grid.Col>
                    <Grid.Col size={3}>

                        <Reports />
                        <ReportsList />

                    </Grid.Col>
                    <Grid.Col size={3}>

                        <Events />

                    </Grid.Col>
                </Grid.Row>

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}

const Reports = () => {
    const Report = (props: any) => {
        const { type } = props;

        const data = {
            l: { name: 'Active', reports: 106, percent: 58 },
            r: { name: 'Finished', reports: 19, percent: 74 }
        }

        const getData = data[type];

        return (
            <Card className={`ui-p-15 ui-shadow-sm ui-round-${type}`}>
                <Grid.Static fluid='no' className='ui-font-condensed'>
                    <Grid.Row hGap='no' vGap='md'>
                        <Grid.Col size={12} className='ui-font-16 ui-m-10-b'>
                            {`${getData.name} Reports`}
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Col size={100} className='ui-font-38 ui-align-r ui-p-15-t'>
                        {getData.reports}
                    </Grid.Col>
                </Grid.Static>

                <div className='ui-color-black-25 ui-m-10-b'>
                    {`%${getData.percent} efficiency`}
                </div>

                <ProgressBar className='ui-round'>
                    <ProgressBar.Item percent={getData.percent} className='ui-fill-dark-100'/>
                </ProgressBar>
            </Card>
        )
    }

    return (
        <Grid.Row hGap='xs' vGap='no' fluid='no' className='ui-highlight'>
            <Grid.Col size={6}>
                <Report type='l' />
            </Grid.Col>
            <Grid.Col size={6}>
                <Report type='r' />
            </Grid.Col>
        </Grid.Row>
    )
}

const ReportsList = () => {
    const listData = [
        {
            name: 'AAC-2019-013:AGF',
            percent: 88,
            reports: 3814,
        },
        {
            name: 'BDA-2019-642',
            percent: 76,
            reports: 2613,
        },
        {
            name: 'DDG-2019-505:AG',
            percent: 69,
            reports: 1890,
        },
        {
            name: 'OOC-2019-781:F',
            percent: 52,
            reports: 1605,
        },
        {
            name: 'BDD-2019-047:G',
            percent: 36,
            reports: 812,
        },
        {
            name: 'RAC-2019-973',
            percent: 23,
            reports: 616,
        }
    ];

    return (
        <Card className='ui-p-15 ui-shadow-sm ui-round'>
            <Tab.Holder dataClasses='ui-fill-dark-100'>
                <Button.Wrapper as='holder' ease='1st' className='ui-m-15-b'>
                    <Button square className='ui-round ui-fill-dark-100 ui-active'>Delayed</Button>
                    <Button square className='ui-round'>Paused</Button>
                </Button.Wrapper>
                <Tab.Content open>
                    <ListGroup className='ui-scroll-v' style={{ maxHeight: '175px' }}>
                        <ListGroup.List>

                            {listData.map(item => (
                                <ListGroup.Item key={item.name} className='ui-no-border'>
                                    <DonutChart.Holder msg={`${item.percent}%`} className='ui-col-48 ui-float-r'>
                                        <DonutChart.Item percent={item.percent} stroke='hsl(188, 89%, 40%)' />
                                    </DonutChart.Holder>

                                    <b className='ui-m-5-t ui-block'>{item.name}</b>
                                    <span className='ui-color-black-50 ui-font-12'>{`${item.reports} Reports`}</span>
                                </ListGroup.Item>
                            ))}

                        </ListGroup.List>
                    </ListGroup>
                </Tab.Content>
                <Tab.Content>
                    <ListGroup>
                        <ListGroup.List>

                            {listData.map(item => (
                                <ListGroup.Item key={item.name} className='ui-no-border'>
                                    <DonutChart.Holder msg={`${item.percent}%`} className='ui-col-48 ui-float-r'>
                                        <DonutChart.Item percent={item.percent} stroke='hsl(188, 89%, 40%)' />
                                    </DonutChart.Holder>

                                    <b className='ui-m-5-t ui-block'>{item.name}</b>
                                    <span className='ui-color-black-50 ui-font-12'>{`${item.reports} Reports`}</span>
                                </ListGroup.Item>
                            ))}

                        </ListGroup.List>
                    </ListGroup>
                </Tab.Content>
            </Tab.Holder>
        </Card>
    )
}

const Events = () => {
    const { apiResponse } = useStoreContext();
    const { eventsDate, events } = apiResponse?.home?.calendar;

    return (
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

            <h3 className='ui-h3 ui-align-l ui-m-10-t'>Events</h3>
            <Calendar
                className='ui-no-p ui-round'
                data={{ date: eventsDate, json: JSON.stringify(events) }}
            />
        </Card>
    )
}