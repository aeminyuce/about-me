import * as React from 'react';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import Dropdown from 'uilab/react/Dropdown';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import LineChart from 'uilab/react/LineChart';
import SvgIcon from 'uilab/react/SvgIcon';
import Tab from 'uilab/react/Tab';

// misc
import { useStoreContext } from '../../../stores/StoreContext';

// assets
import { IconAngleDown } from 'uilab-icons/react/general/angle-down';

export default function() {
    const { api } = useStoreContext();

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
                                <span>{currentYear}</span>
                                <SvgIcon toggle as='js' src={IconAngleDown} l={10} />
                            </Button>
                            <Dropdown.Menu className='ui-shadow-lg'>
                                <Dropdown.Item selected className='ui-tab ui-active'>{currentYear}</Dropdown.Item>
                                <Dropdown.Item className='ui-tab'>{currentYear - 1}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid.Col>
                </Grid.Row>

                <Tab.Content open className='ui-m-10-t'>

                    <LineChart.Holder grids infos x={salesProfits?.x}>
                        <LineChart.Line filled dotted name={salesProfits?.sales} colorIndex={5}>
                            <LineChart.Items y={salesProfits?.y1} />
                        </LineChart.Line>
                        <LineChart.Line curved name={salesProfits?.profit} colorIndex={7}>
                            <LineChart.Items y={salesProfits?.y2} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Tab.Content>
                <Tab.Content className='ui-m-10-t'>

                    <LineChart.Holder grids infos x={salesProfits?.x}>
                        <LineChart.Line filled dotted name={salesProfits?.sales} colorIndex={8}>
                            <LineChart.Items y={salesProfits?.y3} />
                        </LineChart.Line>
                        <LineChart.Line curved name={salesProfits?.profit} colorIndex={10}>
                            <LineChart.Items y={salesProfits?.y4} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Tab.Content>
            </Tab.Holder>
        </Card>
    )
}