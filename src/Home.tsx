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
import type { ReportsListProps } from './utils/Models';
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
        <Grid.Container as='main' noGutter='all'>
            <Grid.Container fixed='xl' as='div'>

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

const Report = (props: any) => {
    const { apiResponse } = useStoreContext();
    const { reports } = apiResponse?.home;

    const { type } = props;
    const getData = reports[type];

    return (
        <Card className={`ui-p-15 ui-shadow-sm ui-round-${type}`}>
            <Grid.Static fluid='no' className='ui-font-condensed'>
                <Grid.Row hGap='no' vGap='md'>
                    <Grid.Col size={12} className='ui-font-16 ui-m-10-b'>
                        {getData.name}
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={100} className='ui-font-38 ui-align-r ui-p-15-t'>
                    {getData.reports}
                </Grid.Col>
            </Grid.Static>

            <div className='ui-color-black-25 ui-m-10-b'>
                {getData.percent}
            </div>

            <ProgressBar className='ui-round'>
                <ProgressBar.Item percent={getData.progressPercent} className='ui-fill-dark-100'/>
            </ProgressBar>
        </Card>
    )
}

const Reports = () => {
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

const ReportsListGroup = (props: any) => {
    const { list } = props;

    return (
        <ListGroup className='ui-round ui-scroll-v ui-scrollbar-faded'>
            <ListGroup.List>

                {list.map((item: ReportsListProps) => (
                    <ListGroup.Item key={item.name} className='ui-no-border'>
                        <DonutChart.Holder msg={item.percent} className='ui-float-r'>
                            <DonutChart.Item percent={item.chartPercent} className="ui-stroke" />
                        </DonutChart.Holder>

                        <b className='ui-m-5-t ui-block'>{item.name}</b>
                        <span className='ui-color-black-50 ui-font-12'>{item.reports}</span>
                    </ListGroup.Item>
                ))}

            </ListGroup.List>
        </ListGroup>
    )
}

const ReportsList = () => {
    const { apiResponse } = useStoreContext();

    const { reportsList } = apiResponse?.home;
    const { delayed, paused } = reportsList;

    return (
        <Card className='home-reports-list ui-p-15 ui-shadow-sm ui-round'>
            <Tab.Holder dataClasses="ui-fill-dark-100">
                <Button.Wrapper as='holder' ease='1st' className='ui-m-15-b'>

                    {Object.keys(reportsList).map((name: string, index: number) => {
                        const isActive = index === 0 ? ' ui-fill-dark-100 ui-active' : '';
                        const text = name.charAt(0).toUpperCase() + name.slice(1);

                        return (
                            <Button key={name} square className={`ui-tab ui-round${isActive}`}>
                                {text}
                            </Button>
                        )
                    })}

                </Button.Wrapper>
                <Tab.Content open>
                    <ReportsListGroup list={delayed} />
                </Tab.Content>
                <Tab.Content>
                    <ReportsListGroup list={paused} />
                </Tab.Content>
            </Tab.Holder>
        </Card>
    )
}

const Events = () => {
    const { apiResponse } = useStoreContext();
    const { eventsDate, settings, events } = apiResponse?.home?.calendar;

    return (
        <Card className='ui-p-15 ui-round ui-shadow-sm'>
            <Dropdown align='l' className='ui-float-r'>
                <Button square ghost className='ui-round'>
                    <SvgIcon as='js' src={IconEllipsisH} />
                </Button>
                <Dropdown.Menu className='ui-color-black ui-inline-block-2nd ui-round ui-shadow-lg ui-cursor-pointer'>

                    {settings.map((name: string) => (
                        <Dropdown.Item key={name}>{name}</Dropdown.Item>
                    ))}

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