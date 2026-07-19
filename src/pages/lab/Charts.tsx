import React, { memo, useState } from 'react';
import Button from 'uilab/react/Button';
import DonutChart from 'uilab/react/DonutChart';
import Dropdown from 'uilab/react/Dropdown';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import LineChart from 'uilab/react/LineChart';
import PieChart from 'uilab/react/PieChart';
import SvgIcon from 'uilab/react/SvgIcon';
import Tab from 'uilab/react/Tab';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import { headings } from '../../helpers/Lab';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';

// assets
import { IconAngleDown } from 'uilab-icons/react/general/angle-down';

export default function () {
    const [tabs, setTabs] = useState<number[]>([]);
    const { api } = useStoreContext();
    const title = headings('charts');

    const charts = api?.lab?.charts;
    const desc = charts?.desc;
    const text = charts?.text;
    const value = charts?.value;

    const currentYear = new Date().getFullYear();

    if (charts) return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>{desc?.lineGrids}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineNoGridRoot}</b>
                    <LineChart.Holder x={value?.linexDays}>
                        <LineChart.Line>
                            <LineChart.Items y={value?.liney1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineRoot}</b>
                    <LineChart.Holder roots x={value?.linexDays}>
                        <LineChart.Line colorIndex={1}>
                            <LineChart.Items y={value?.liney1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineGrid}</b>
                    <LineChart.Holder grids x={value?.linexDays}>
                        <LineChart.Line colorIndex={2}>
                            <LineChart.Items y={value?.liney1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineGridRoot}</b>
                    <LineChart.Holder roots grids x={value?.linexDays}>
                        <LineChart.Line colorIndex={3}>
                            <LineChart.Items y={value?.liney1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.lineRows}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineRows8x20}</b>
                    <LineChart.Holder roots grids x={value?.linexDays} size={{ rows: 10, rowsHeight: 20 }}>
                        <LineChart.Line colorIndex={4}>
                            <LineChart.Items y={value?.liney1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineRows4x50}</b>
                    <LineChart.Holder roots grids x={value?.linexDays} size={{ rows: 4, rowsHeight: 50 }}>
                        <LineChart.Line colorIndex={5}>
                            <LineChart.Items y={value?.liney1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineRows1x200}</b>
                    <LineChart.Holder roots grids x={value?.linexDays} size={{ rows: 1, rowsHeight: 200 }}>
                        <LineChart.Line colorIndex={6}>
                            <LineChart.Items y={value?.liney1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.lineVariants}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.linePrefixSuffix}</b>
                    <LineChart.Holder roots x={value?.linexDays} prefix='€' suffix='m' size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line colorIndex={7}>
                            <LineChart.Items y={value?.liney1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineSepDot}</b>
                    <LineChart.Holder roots x={value?.linexDays} prefix='$' sep='.' size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line colorIndex={8}>
                            <LineChart.Items y={value?.lineyDollars} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineNeg}</b>
                    <LineChart.Holder roots x={value?.linexDays} size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line colorIndex={9}>
                            <LineChart.Items y={value?.lineyNeg} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineNegPos}</b>
                    <LineChart.Holder roots x={value?.linexDays} size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line colorIndex={10}>
                            <LineChart.Items y={value?.lineyNegPos} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineZeroRep}</b>
                    <LineChart.Holder roots x={value?.linexDays} size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line>
                            <LineChart.Items y={value?.lineyZeroRep} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineZeroAll}</b>
                    <LineChart.Holder roots x={value?.linexDays} size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line colorIndex={1}>
                            <LineChart.Items y={value?.lineyZeroAll} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.lineMulti}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={6} size={12}>

                    <LineChart.Holder roots x={value?.linexDays}>
                        <LineChart.Line>
                            <LineChart.Items y={value?.liney2} />
                        </LineChart.Line>
                        <LineChart.Line>
                            <LineChart.Items y={value?.liney3} />
                        </LineChart.Line>
                        <LineChart.Line>
                            <LineChart.Items y={value?.liney4} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <LineChart.Holder roots x={value?.linexDays}>
                        <LineChart.Line>
                            <LineChart.Items y={value?.lineyNeg} />
                        </LineChart.Line>
                        <LineChart.Line>
                            <LineChart.Items y={value?.liney2} />
                        </LineChart.Line>
                        <LineChart.Line>
                            <LineChart.Items y={value?.liney3} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.lineTypes}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineLines}</b>
                    <LineChart.Holder roots x={value?.linexDays}>
                        <LineChart.Line dotted colorIndex={3}>
                            <LineChart.Items y={value?.liney2} />
                        </LineChart.Line>
                        <LineChart.Line dashed colorIndex={4}>
                            <LineChart.Items y={value?.liney3} />
                        </LineChart.Line>
                        <LineChart.Line filled colorIndex={5}>
                            <LineChart.Items y={value?.liney4} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineCurved}</b>
                    <LineChart.Holder roots x={value?.linexDays}>
                        <LineChart.Line dotted curved colorIndex={3}>
                            <LineChart.Items y={value?.lineyNeg} />
                        </LineChart.Line>
                        <LineChart.Line dashed curved colorIndex={4}>
                            <LineChart.Items y={value?.liney2} />
                        </LineChart.Line>
                        <LineChart.Line filled curved colorIndex={5}>
                            <LineChart.Items y={value?.liney3} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.lineCircles}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineCircleNo}</b>
                    <LineChart.Holder roots x={value?.linexDays}>
                        <LineChart.Line dashed filled curved noCircles>
                            <LineChart.Items y={value?.liney1} />
                        </LineChart.Line>
                        <LineChart.Line filled curved noCircles>
                            <LineChart.Items y={value?.liney2} />
                        </LineChart.Line>
                        <LineChart.Line dotted filled curved noCircles>
                            <LineChart.Items y={value?.liney4} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineNoRepeat}</b>
                    <LineChart.Holder roots x={value?.linexDays}>
                        <LineChart.Line dashed noRepeatedCircles>
                            <LineChart.Items y={value?.lineyRep1} />
                        </LineChart.Line>
                        <LineChart.Line noRepeatedCircles>
                            <LineChart.Items y={value?.lineyRep2} />
                        </LineChart.Line>
                        <LineChart.Line dotted noRepeatedCircles>
                            <LineChart.Items y={value?.lineyRep3} />
                        </LineChart.Line>
                        <LineChart.Line noRepeatedCircles>
                            <LineChart.Items y={value?.lineyRep4} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineRepeatOnly}</b>
                    <LineChart.Holder roots x={value?.linexDays}>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.lineyRep5} />
                        </LineChart.Line>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.lineyRep6} />
                        </LineChart.Line>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.lineyRep7} />
                        </LineChart.Line>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.lineyRep8} />
                        </LineChart.Line>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.lineyRep9} />
                        </LineChart.Line>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.lineyRep10} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineCircleUrl}</b>
                    <LineChart.Holder roots x={value?.linexDays}>
                        <LineChart.Line filled curved>
                            <LineChart.Items y={value?.liney2} url='#' />
                        </LineChart.Line>
                        <LineChart.Line filled dashed>
                            <LineChart.Items y={value?.liney4} url='#' />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.lineInfos}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineToggle1}</b>
                    <LineChart.Holder roots grids infos x={value?.linexDays}>
                        <LineChart.Line filled name={text?.lineInfo1} colorIndex={5}>
                            <LineChart.Items y={value?.liney2} />
                        </LineChart.Line>
                        <LineChart.Line filled name={text?.lineInfo2} colorIndex={7}>
                            <LineChart.Items y={value?.lineyNegPos} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lineToggle2}</b>
                    <LineChart.Holder roots grids infos x={value?.linexDays}>
                        <LineChart.Line filled noSelected name={text?.lineInfo1} colorIndex={5}>
                            <LineChart.Items y={value?.liney2} />
                        </LineChart.Line>
                        <LineChart.Line filled name={text?.lineInfo2} colorIndex={7}>
                            <LineChart.Items y={value?.lineyNegPos} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.lineStepping}</Description>
        <Preview>
            <LineChart.Holder roots grids x={value?.linexStep} step={6} size={{ rows: 10, rowsHeight: 25 }}>
                <LineChart.Line filled dotted colorIndex={8}>
                    <LineChart.Items y={value?.lineyStep} />
                </LineChart.Line>
            </LineChart.Holder>
        </Preview>

        <Description>{desc?.lineMulti}</Description>
        <Preview>
            <Tab.Holder dataClasses='ui-font-bold'>

                <Grid.Row fluid='no'>
                    <Grid.Col size={8}>
                        <Heading as='h4' className='ui-align-l ui-m-10-v'>{text?.lineMonthly}</Heading>
                    </Grid.Col>
                    <Grid.Col size={4} className='ui-align-r'>
                        <Dropdown toggle align='l' className='ui-float-r ui-round-1st'>
                            <Button ghost>
                                <span>{currentYear}</span>
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

                <Tab.Content open>
                    <LineMulti x={value?.linexMonths} y1={value?.lineyMonth1} y2={value?.lineyMonth2} name1={text?.lineSales} name2={text?.lineProfit} />
                </Tab.Content>
                <Tab.Content>
                    {tabs.includes(1) &&
                        <LineMulti x={value?.linexMonths} y1={value?.lineyMonth3} y2={value?.lineyMonth4} name1={text?.lineSales} name2={text?.lineProfit} />
                    }
                </Tab.Content>
            </Tab.Holder>
        </Preview>
        </>
    )
}

const LineMulti = memo((props: any) => {
    // when parent tabs toggled, prevent re-rendering of the line charts
    const { x, y1, y2, name1, name2 } = props;

    return (
        <LineChart.Holder roots grids infos x={x}>
            <LineChart.Line filled dotted name={name1}>
                <LineChart.Items y={y1} />
            </LineChart.Line>
            <LineChart.Line curved name={name2}>
                <LineChart.Items y={y2} />
            </LineChart.Line>
        </LineChart.Holder>
    )
});