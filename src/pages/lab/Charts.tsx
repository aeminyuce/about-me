import * as React from 'react';
import DonutChart from 'uilab/react/DonutChart';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import LineChart from 'uilab/react/LineChart';
import PieChart from 'uilab/react/PieChart';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';
import { headings } from '../../helpers/Lab';

export default function () {
    const { api } = useStoreContext();
    const title = headings('charts');

    const charts = api?.lab?.charts;
    const desc = charts?.desc;
    const text = charts?.text;
    const value = charts?.value;

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

                    <b className='ui-m-5-b ui-nline-block'>{text?.noGridRoot}</b>
                    <LineChart.Holder x={value?.xDays}>
                        <LineChart.Line>
                            <LineChart.Items y={value?.y1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.root}</b>
                    <LineChart.Holder roots x={value?.xDays}>
                        <LineChart.Line colorIndex={1}>
                            <LineChart.Items y={value?.y1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.grid}</b>
                    <LineChart.Holder grids x={value?.xDays}>
                        <LineChart.Line colorIndex={2}>
                            <LineChart.Items y={value?.y1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.gridRoot}</b>
                    <LineChart.Holder roots grids x={value?.xDays}>
                        <LineChart.Line colorIndex={3}>
                            <LineChart.Items y={value?.y1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.rowSizes}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.rows8x20}</b>
                    <LineChart.Holder roots grids x={value?.xDays} size={{ rows: 10, rowsHeight: 20 }}>
                        <LineChart.Line colorIndex={4}>
                            <LineChart.Items y={value?.y1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.rows4x50}</b>
                    <LineChart.Holder roots grids x={value?.xDays} size={{ rows: 4, rowsHeight: 50 }}>
                        <LineChart.Line colorIndex={5}>
                            <LineChart.Items y={value?.y1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.rows1x200}</b>
                    <LineChart.Holder roots grids x={value?.xDays} size={{ rows: 1, rowsHeight: 200 }}>
                        <LineChart.Line colorIndex={6}>
                            <LineChart.Items y={value?.y1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.dataVariants}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.prefixSuffix}</b>
                    <LineChart.Holder roots x={value?.xDays} prefix='€' suffix='m' size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line colorIndex={7}>
                            <LineChart.Items y={value?.y1} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.sepDot}</b>
                    <LineChart.Holder roots x={value?.xDays} prefix='$' sep='.' size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line colorIndex={8}>
                            <LineChart.Items y={value?.yDollars} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.negative}</b>
                    <LineChart.Holder roots x={value?.xDays} size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line colorIndex={9}>
                            <LineChart.Items y={value?.yNegative} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.negPos}</b>
                    <LineChart.Holder roots x={value?.xDays} size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line colorIndex={10}>
                            <LineChart.Items y={value?.yNegPos} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.zeroRep}</b>
                    <LineChart.Holder roots x={value?.xDays} size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line>
                            <LineChart.Items y={value?.yZeroRep} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={4} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.zeroAll}</b>
                    <LineChart.Holder roots x={value?.xDays} size={{ rows: 5, rowsHeight: 40 }}>
                        <LineChart.Line colorIndex={1}>
                            <LineChart.Items y={value?.yZeroAll} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.multi}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={6} size={12}>

                    <LineChart.Holder roots x={value?.xDays}>
                        <LineChart.Line>
                            <LineChart.Items y={value?.y2} />
                        </LineChart.Line>
                        <LineChart.Line>
                            <LineChart.Items y={value?.y3} />
                        </LineChart.Line>
                        <LineChart.Line>
                            <LineChart.Items y={value?.y4} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <LineChart.Holder roots x={value?.xDays}>
                        <LineChart.Line>
                            <LineChart.Items y={value?.yNegative} />
                        </LineChart.Line>
                        <LineChart.Line>
                            <LineChart.Items y={value?.y2} />
                        </LineChart.Line>
                        <LineChart.Line>
                            <LineChart.Items y={value?.y3} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.lineTypes}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.lines}</b>
                    <LineChart.Holder roots x={value?.xDays}>
                        <LineChart.Line dotted colorIndex={3}>
                            <LineChart.Items y={value?.y2} />
                        </LineChart.Line>
                        <LineChart.Line dashed colorIndex={4}>
                            <LineChart.Items y={value?.y3} />
                        </LineChart.Line>
                        <LineChart.Line filled colorIndex={5}>
                            <LineChart.Items y={value?.y4} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.linesCurved}</b>
                    <LineChart.Holder roots x={value?.xDays}>
                        <LineChart.Line dotted curved colorIndex={3}>
                            <LineChart.Items y={value?.yNegative} />
                        </LineChart.Line>
                        <LineChart.Line dashed curved colorIndex={4}>
                            <LineChart.Items y={value?.y2} />
                        </LineChart.Line>
                        <LineChart.Line filled curved colorIndex={5}>
                            <LineChart.Items y={value?.y3} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.circleTypes}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.circleNo}</b>
                    <LineChart.Holder roots x={value?.xDays}>
                        <LineChart.Line dashed filled curved noCircles>
                            <LineChart.Items y={value?.y1} />
                        </LineChart.Line>
                        <LineChart.Line filled curved noCircles>
                            <LineChart.Items y={value?.y2} />
                        </LineChart.Line>
                        <LineChart.Line dotted filled curved noCircles>
                            <LineChart.Items y={value?.y4} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.circleNoRepeat}</b>
                    <LineChart.Holder roots x={value?.xDays}>
                        <LineChart.Line dashed noRepeatedCircles>
                            <LineChart.Items y={value?.yRepeat1} />
                        </LineChart.Line>
                        <LineChart.Line noRepeatedCircles>
                            <LineChart.Items y={value?.yRepeat2} />
                        </LineChart.Line>
                        <LineChart.Line dotted noRepeatedCircles>
                            <LineChart.Items y={value?.yRepeat3} />
                        </LineChart.Line>
                        <LineChart.Line noRepeatedCircles>
                            <LineChart.Items y={value?.yRepeat4} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.circleOnlyRepeat}</b>
                    <LineChart.Holder roots x={value?.xDays}>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.yRepeat5} />
                        </LineChart.Line>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.yRepeat6} />
                        </LineChart.Line>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.yRepeat7} />
                        </LineChart.Line>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.yRepeat8} />
                        </LineChart.Line>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.yRepeat9} />
                        </LineChart.Line>
                        <LineChart.Line filled onlyRepeated>
                            <LineChart.Items y={value?.yRepeat10} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.circleUrl}</b>
                    <LineChart.Holder roots x={value?.xDays}>
                        <LineChart.Line filled curved>
                            <LineChart.Items y={value?.y2} url='#' />
                        </LineChart.Line>
                        <LineChart.Line filled dashed>
                            <LineChart.Items y={value?.y4} url='#' />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.infos}</Description>
        <Preview>
            <Grid.Row vGap='lg' hGap='no'>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.infoToggle1}</b>
                    <LineChart.Holder roots infos x={value?.xDays}>
                        <LineChart.Line filled name={text?.info1} colorIndex={5}>
                            <LineChart.Items y={value?.y2} />
                        </LineChart.Line>
                        <LineChart.Line filled name={text?.info2} colorIndex={7}>
                            <LineChart.Items y={value?.yNegPos} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <b className='ui-m-5-b ui-nline-block'>{text?.infoToggle2}</b>
                    <LineChart.Holder roots infos x={value?.xDays}>
                        <LineChart.Line filled noSelected name={text?.info1} colorIndex={5}>
                            <LineChart.Items y={value?.y2} />
                        </LineChart.Line>
                        <LineChart.Line filled name={text?.info2} colorIndex={7}>
                            <LineChart.Items y={value?.yNegPos} />
                        </LineChart.Line>
                    </LineChart.Holder>

                </Grid.Col>
            </Grid.Row>
        </Preview>
        </>
    );
}
