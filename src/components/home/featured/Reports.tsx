import * as React from 'react';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import DonutChart from 'uilab/react/DonutChart';
import Grid from 'uilab/react/Grid';
import ListGroup from 'uilab/react/ListGroup';
import ProgressBar from 'uilab/react/ProgressBar';
import Tab from 'uilab/react/Tab';

// misc
import { useStoreContext } from '../../../states/StoreContext';
import type { ReportsListProps } from '../../../models/Home_Featured';

const Report = (props: any) => {
    const { apiResponse } = useStoreContext();
    const { type } = props;

    const reportsData = apiResponse?.home_featured?.reports;
    const getData = reportsData[type];

    return (
        <Card className={`ui-p-15 ui-shadow ui-round-${type}`}>
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

export const Reports = () => {
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
        <ListGroup className={`ui-round-t ui-scroll-v ui-scrollbar-round ui-scrollbar-faded${setScrollOuter}`}>
            <ListGroup.List>

                {list?.map((item: ReportsListProps) => (
                    <ListGroup.Item key={item.name}>
                        <DonutChart.Holder as='span' msg={item.percent} className='ui-float-r'>
                            <DonutChart.Item percent={item.chartPercent} className='ui-stroke' />
                        </DonutChart.Holder>

                        <span className='ui-m-5-t ui-block'>{item.name}</span>
                        <span className='ui-color-black-50 ui-font-12'>{item.reports}</span>
                    </ListGroup.Item>
                ))}

            </ListGroup.List>
        </ListGroup>
    )
}

export const ReportsList = () => {
    const { apiResponse } = useStoreContext();
    const reportsList = apiResponse?.home_featured?.reportsList;

    return (
        <Card className='home-reports-list ui-p-15-t ui-p-15-h ui-shadow ui-round'>
            <Tab.Holder dataClasses='ui-fill-dark-100'>
                <Button.Wrapper as='div' type='holder' ease='1st' className='ui-m-15-b ui-round-1st'>

                    {reportsList && Object.keys(reportsList).map((name: string, index: number) => {
                        const isActive = index === 0 ? ' ui-fill-dark-100 ui-active' : '';
                        const text = name.charAt(0).toUpperCase() + name.slice(1);

                        return (
                            <Button key={name} square className={`ui-tab${isActive}`}>
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