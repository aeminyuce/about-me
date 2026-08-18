import React from 'react';
import Calendar from '@ui/Calendar';
import CalendarPicker from '@ui/CalendarPicker';
import Grid from '@ui/Grid';
import Item from '@ui/Item';
import Heading from '@ui/Heading';
import Spacer from '@ui/Spacer';

// misc
import { useStoreContext } from '@stores/StoreContext';
import { headings } from '@helpers/Lab';
import Description from '@components/common/Description';
import Preview from '@components/common/Preview';
import BreadcrumbsWrapper from '@components/lab/BreadcrumbsWrapper';
import ShowCode from '@components/lab/ShowCode';
import CodePanel from '@components/common/CodePanel';

export default function () {
    const { api } = useStoreContext();
    const title = headings('calendar');

    const calendar = api?.lab?.calendar;
    const desc = calendar?.desc;
    const text = calendar?.text;
    const dates = calendar?.dates;
    const details = calendar?.details;

    if (calendar) return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[0]} className='ui-align-l'>
                            {title?.h3[0]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='styles' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.styles}</Description>
        <Preview>
            <Grid.Row className='ui-round-2nd'>
                <Grid.Col lg={{ size: 5, offset: 1 }} size={12}>
                    <Calendar className='ui-shadow' />
                </Grid.Col>
                <Grid.Col lg={{ size: 5 }} size={12}>
                    <Calendar className='ui-shadow ui-theme-blue' />
                </Grid.Col>
                <Grid.Col lg={{ size: 5, offset: 1 }} size={12}>
                    <Calendar className='ui-border ui-theme-redPurple' />
                </Grid.Col>
                <Grid.Col lg={{ size: 5 }} size={12}>
                    <Calendar className='ui-theme-blueGreen ui-fill-light-100' />
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <CodePanel type='react' id='styles'>
{`code example`}
        </CodePanel>

        <Spacer size={30} className='ui-m-30-v' />

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[1]} className='ui-align-l'>
                            {title?.h3[1]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='predefined' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.details}</Description>
        <Preview>
            <Grid.Row className='ui-round-2nd'>
                <Grid.Col lg={{ size: 5, offset: 1 }} size={12}>
                    <Item as='b' className='ui-m-5-b ui-inline-block'>
                        {`${text?.prev}'${dates?.defined1}'`}
                    </Item>
                    <Calendar className='ui-shadow' data={{ date: dates?.defined1 }} />
                </Grid.Col>
                <Grid.Col lg={{ size: 5 }} size={12}>
                    <Item as='b' className='ui-m-5-b ui-inline-block'>
                        {`${text?.next}'${dates?.defined2}'`}
                    </Item>
                    <Calendar className='ui-shadow' data={{ date: dates?.defined2 }} />
                </Grid.Col>
                <Grid.Col lg={{ size: 5, offset: 1 }} size={12}>
                    <Item as='b' className='ui-m-5-b ui-inline-block'>
                        {`${text?.month}'${dates?.defined3}'`}
                    </Item>
                    <Calendar className='ui-shadow' data={{ date: dates?.defined3 }} />
                </Grid.Col>
                <Grid.Col lg={{ size: 5 }} size={12}>
                    <Item as='b' className='ui-m-5-b ui-inline-block'>
                        {`${text?.yearMonth}'${dates?.defined4}'`}
                    </Item>
                    <Calendar className='ui-shadow' data={{ date: dates?.defined4 }} />
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <CodePanel type='react' id='predefined'>
{`code example`}
        </CodePanel>

        <Spacer size={30} className='ui-m-30-v' />

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[2]} className='ui-align-l'>
                            {title?.h3[2]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='details' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.details}</Description>
        <Preview>
            <Grid.Row>
                <Grid.Col lg={{ size: 6, offset: 3 }} size={12}>
                    <Calendar className='ui-round ui-shadow ui-theme-purpleBlue' data={{ date: dates?.details }} json={details} />
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <CodePanel type='react' id='details'>
{`code example`}
        </CodePanel>

        <Spacer size={30} className='ui-m-30-v' />

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[3]} className='ui-align-l'>
                            {title?.h3[3]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='pickers' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.pickers}</Description>
        <Preview>
            <Grid.Row>
                <Grid.Col size={12} className='ui-round-1st'>
                    <CalendarPicker inline='always' className='ui-m-20-r ui-sm-no-m' />
                    <Spacer size={10} className='ui-shown-sm' />
                    <CalendarPicker inline='always' defaultValue={dates?.picker} />
                </Grid.Col>
            </Grid.Row>
            <Grid.Row className='ui-round-2nd'>
                <Grid.Col lg={{ size: 5, offset: 1 }} size={12}>
                    <CalendarPicker />
                </Grid.Col>
                <Grid.Col lg={{ size: 5 }} size={12}>
                    <CalendarPicker defaultValue={dates?.picker} />
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <CodePanel type='react' id='pickers'>
{`code example`}
        </CodePanel>
        </>
    )
}
