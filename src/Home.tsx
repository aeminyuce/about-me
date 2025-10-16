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
                        <Grid.Col size={12}>
                            <div className='ui-font-16 ui-m-10-b'>
                                {`${getData.name} Reports`}
                            </div>
                            <div className='ui-font-semibold ui-color-black-25'>
                                {`%${getData.percent} efficiency`}
                            </div>
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Col size={100} className='ui-align-r'>
                        <div className='ui-font-38 ui-m-10-t ui-p-3-t'>
                            {getData.reports}
                        </div>
                    </Grid.Col>
                </Grid.Static>

                <ProgressBar className='ui-m-15-t ui-round'>
                    <ProgressBar.Item percent={getData.percent} className='ui-fill-dark-100'/>
                </ProgressBar>
            </Card>
        )
    }

    return (
        <Grid.Row hGap='xs' vGap='no' fluid='no'>
            <Grid.Col size={6}>
                <Report type='l' />
            </Grid.Col>
            <Grid.Col size={6}>
                <Report type='r' />
            </Grid.Col>
        </Grid.Row>
    )
}

const Events = () => {
    const { apiResponse } = useStoreContext();
    const { eventsDate, events } = apiResponse?.calendar;

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

            <h3 className="ui-h3 ui-align-l ui-m-10-t">Events</h3>
            <Calendar
                className='ui-no-p ui-round ui-shadow-sm'
                data={{ date: eventsDate, json: JSON.stringify(events) }}
            />
        </Card>
    )
}