import React, { memo, useState } from 'react';
import Button from '@ui/Button';
import Card from '@ui/Card';
import Dropdown from '@ui/Dropdown';
import Grid from '@ui/Grid';
import Heading from '@ui/Heading';
import Item from '@ui/Item';
import LineChart from '@ui/LineChart';
import SvgIcon from '@ui/SvgIcon';
import Tab from '@ui/Tab';

// misc
import { useStoreContext } from '@stores/StoreContext';
import type { MonthlyChartsProps } from '@models/Home_Featured';

// assets
import { IconAngleDown } from '@icon/general/angle-down';

export default function () {
    const { api } = useStoreContext();
    const [tabs, setTabs] = useState<number[]>([]);

    const salesProfits = api?.home_featured?.salesProfits;
    const currentYear = new Date().getFullYear();

    return (
        <Card className='sales-profits ui-p-15 ui-round ui-shadow'>
            <Tab.Holder dataClasses='ui-font-bold'>

                <Grid.Row fluid='no' vGap='no'>
                    <Grid.Col size={8}>
                        <Heading as='h3' className='ui-align-l ui-m-10-t'>{salesProfits?.title}</Heading>
                    </Grid.Col>
                    <Grid.Col size={4} className='ui-align-r'>
                        <Dropdown toggle align='l' className='ui-float-r ui-round-1st'>
                            <Button ghost className='ui-fill-dark-100'>
                                <Item as='span'>{currentYear}</Item>
                                <SvgIcon toggle as='js' src={IconAngleDown} l={10} />
                            </Button>
                            <Dropdown.Menu className='ui-shadow-lg'>
                                <Dropdown.Item active selected className='ui-tab'>
                                    {currentYear}
                                </Dropdown.Item>
                                <Dropdown.Item className='ui-tab' onClick={() => setTabs(values => [...values, 1])}>
                                    {currentYear - 1}
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid.Col>
                </Grid.Row>

                <Tab.Content open className='ui-m-10-t'>
                    <MonthlyCharts y1={salesProfits?.y1} y2={salesProfits?.y2} index1={5} index2={7} data={salesProfits} />
                </Tab.Content>
                <Tab.Content className='ui-m-10-t'>
                    {/* use lazy when use different component */}
                    {tabs.includes(1) &&
                        <MonthlyCharts y1={salesProfits?.y3} y2={salesProfits?.y4} index1={8} index2={10} data={salesProfits} />
                    }
                </Tab.Content>
            </Tab.Holder>
        </Card>
    )
}

const MonthlyCharts = memo((props: MonthlyChartsProps) => {
    // when parent tabs toggled, prevent re-rendering of the line charts
    const { y1, y2, index1, index2, data } = props;

    return (
        <LineChart.Holder grids infos x={data?.x}>
            <LineChart.Line filled dotted name={data?.sales} colorIndex={index1}>
                <LineChart.Items y={y1} />
            </LineChart.Line>
            <LineChart.Line curved name={data?.profit} colorIndex={index2}>
                <LineChart.Items y={y2} />
            </LineChart.Line>
        </LineChart.Holder>
    )
});