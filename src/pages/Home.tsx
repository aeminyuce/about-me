import * as React from 'react';
import { Fragment } from 'react';
import Avatar from 'uilab/react/Avatar';
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

// misc
import AboutMe from '../views/AboutMe';
import Header from '../views/Header';
import Nav from '../views/Nav';
import Footer from '../views/Footer';
import { useStoreContext } from '../states/StoreContext';
import type { PeopleListProps, PeopleMoreListProps, ReportsListProps } from '../utils/Models';

// assets
import { IconEllipsisH } from 'uilab-icons/react/general/ellipsis-h';
import { IconUserPlus } from 'uilab-icons/react/general/user-plus';

export default function () {
    const { theme, apiResponse } = useStoreContext();

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
                {apiResponse?.home &&
                    <Grid.Row className={theme ? ` ${theme}` : null}>
                        <Grid.Col lg={2} size={4} md={6}>
                            ...
                        </Grid.Col>
                        <Grid.Col lg={3} size={4} md={6}>

                            {(apiResponse?.home?.reports?.l || apiResponse?.home?.reports?.r) && <Reports />}
                            {(apiResponse?.home?.reportsList?.delayed || apiResponse?.home?.reportsList?.paused) && <ReportsList />}

                        </Grid.Col>
                        <Grid.Col lg={3} size={4} md={6}>

                            {apiResponse?.home?.people?.list && <People />}
                            {apiResponse?.home?.peopleMore?.list && <PeopleMore />}

                        </Grid.Col>
                        <Grid.Col lg={4} size={4} md={6}>

                            {apiResponse?.home?.calendar && <Events />}

                        </Grid.Col>
                    </Grid.Row>
                }

            </Grid.Container>
        </Grid.Container>

        {/* footer */}
        <Footer />
        </>
    );
}

const Report = (props: any) => {
    const { apiResponse } = useStoreContext();
    const { type } = props;

    const reportsData = apiResponse?.home?.reports;
    const getData = reportsData[type];

    return (
        <Card className={`ui-p-15 ui-shadow-sm ui-round-${type}`}>
            {(getData?.name || getData?.reports) &&
                <Grid.Static fluid='no' className='ui-font-condensed'>
                    <Grid.Row hGap='no' vGap='md'>
                        <Grid.Col size={12} className='ui-font-16 ui-m-10-b'>
                            {getData?.name || ''}
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Col size={100} className='ui-font-38 ui-align-r ui-p-15-t'>
                        {getData?.reports || 0}
                    </Grid.Col>
                </Grid.Static>
            }

            {getData?.percent &&
                <div className='ui-color-black-25 ui-m-10-b'>
                    {getData?.percent}
                </div>
            }

            {getData?.progressPercent &&
                <ProgressBar className='ui-round'>
                    <ProgressBar.Item percent={getData?.progressPercent} className='ui-fill-dark-100'/>
                </ProgressBar>
            }
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
    const setScrollOuter = list?.length > 2 ? ' ui-scrollbar-outer' : '';

    return (
        <ListGroup className={`ui-round ui-scroll-v ui-scrollbar-faded${setScrollOuter}`}>
            <ListGroup.List>

                {list.map((item: ReportsListProps) => (
                    <ListGroup.Item key={item.name}>
                        <DonutChart.Holder as='span' msg={item.percent} className='ui-float-r'>
                            <DonutChart.Item percent={item.chartPercent} className="ui-stroke" />
                        </DonutChart.Holder>

                        <span className='ui-m-5-t ui-block'>{item.name}</span>
                        <span className='ui-color-black-50 ui-font-12'>{item.reports}</span>
                    </ListGroup.Item>
                ))}

            </ListGroup.List>
        </ListGroup>
    )
}

const ReportsList = () => {
    const { apiResponse } = useStoreContext();
    const reportsList = apiResponse?.home?.reportsList;

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
                    {reportsList?.delayed && <ReportsListGroup list={reportsList?.delayed} />}
                </Tab.Content>
                <Tab.Content>
                    {reportsList?.paused && <ReportsListGroup list={reportsList?.paused} />}
                </Tab.Content>
            </Tab.Holder>
        </Card>
    )
}

const People = () => {
    const { apiResponse } = useStoreContext();
    const people = apiResponse?.home?.people;

    const peopleList = people?.list;
    const addPeople = people?.addPeople;
    const cardTitle = people?.cardTitle;

    const peopleIcons = {
        "user-plus": IconUserPlus,
    };

    const setScrollOuter = peopleList?.length > 3 ? ' ui-scrollbar-outer' : '';

    return (
        <Card className='home-people-list ui-p-15 ui-round'>
            {addPeople &&
                <Button ghost square title={addPeople?.title} className='ui-round ui-float-r' data={{ 'tooltip': '', 'only': 'desktop' }}>
                    {addPeople?.icon &&
                        <SvgIcon as='js' src={peopleIcons[addPeople?.icon]} />
                    }
                </Button>
            }

            {cardTitle &&
                <h3 className='ui-h3 ui-align-l ui-m-10-t'>{cardTitle}</h3>
            }

            <ListGroup className={`ui-round ui-scroll-v ui-scrollbar-faded${setScrollOuter}`}>
                <ListGroup.List avatarSize='xs'>

                    {peopleList.map((item: PeopleListProps) => (
                        <ListGroup.Item key={item.jobTitle}>
                            <a href={item.url}>
                                {(item.avatar || item.avatarText) &&
                                    <Avatar size='xs' className='ui-circle ui-fill-dark-100 ui-hover-scale-more'>
                                        {item.avatar && <img src={item.avatar} />}
                                        {item.avatarText && <span>{item.avatarText}</span>}
                                    </Avatar>
                                }

                                <span className="ui-font-ellipsis ui-block">{item.jobTitle}</span>
                                <span className="ui-color-black-25">{item.description}</span>
                            </a>
                        </ListGroup.Item>
                    ))}

                </ListGroup.List>
            </ListGroup>
        </Card>
    )
}

const PeopleMore = () => {
    const { apiResponse } = useStoreContext();
    const peopleMore = apiResponse?.home?.peopleMore;

    const moreBtnText = peopleMore?.moreBtnText;
    const moreCount = peopleMore?.moreCount;

    return (
        <Card className='ui-p-15 ui-round'>
            {moreBtnText &&
                <Button to={peopleMore?.moreUrl} className='ui-m-4-v ui-float-r ui-circle ui-fill-dark-100'>
                    {moreBtnText}
                </Button>
            }

            <Avatar.Holder className='ui-m-auto ui-ease-1st-layout'>

                {peopleMore?.list.map((item: PeopleMoreListProps) => (
                    <Fragment key={item.jobTitle}>
                        {(item.avatar || item.avatarText) &&
                            <Avatar noease className='ui-circle ui-hover-scale-more'>
                                {item.avatar && <img src={item.avatar} />}
                                {item.avatarText && <span>{item.avatarText}</span>}
                            </Avatar>
                        }
                    </Fragment>
                ))}

                {moreCount &&
                    <span className='ui-m-10-h ui-inline-block'>
                        +{moreCount}
                    </span>
                }
            </Avatar.Holder>
        </Card>
    )
}

const Events = () => {
    const { apiResponse } = useStoreContext();
    const calendar = apiResponse?.home?.calendar;

    return (
        <Card className='ui-p-15 ui-round ui-shadow-sm'>
            {calendar?.settings &&
                <Dropdown align='l' className='ui-float-r'>
                    <Button square ghost title={calendar?.title} className='ui-round' data={{ 'tooltip': '', 'only': 'desktop' }}>
                        <SvgIcon as='js' src={IconEllipsisH} />
                    </Button>
                    <Dropdown.Menu className='ui-color-black ui-inline-block-2nd ui-round ui-shadow-lg ui-cursor-pointer'>

                        {calendar?.settings.map((name: string) => (
                            <Dropdown.Item key={name}>{name}</Dropdown.Item>
                        ))}

                    </Dropdown.Menu>
                </Dropdown>
            }

            {calendar?.cardTitle &&
                <h3 className='ui-h3 ui-align-l ui-m-10-t'>{calendar?.cardTitle}</h3>
            }

            {calendar?.eventsDate && calendar?.events &&
                <Calendar
                    className='ui-no-p ui-round'
                    data={{ date: calendar?.eventsDate, json: JSON.stringify(calendar?.events) }}
                />
            }
        </Card>
    )
}