import * as React from 'react';
import Calendar from 'uilab/react/Calendar';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';
import { headings } from '../../helpers/Lab';

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

        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

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

        <Heading as='h3' id={title?.hash[1]}>
            {title?.h3[1]}
        </Heading>

        <Description>{desc?.details}</Description>
        <Preview>
            <Grid.Row className='ui-align-l ui-round-2nd'>
                <Grid.Col lg={{ size: 5, offset: 1 }} size={12}>
                    <b className='ui-m-5-b ui-inline-block'>
                        {`${text?.prev}"${dates?.defined1}"`}
                    </b>
                    <Calendar className='ui-shadow' data={{ date: dates?.defined1 }} />
                </Grid.Col>
                <Grid.Col lg={{ size: 5 }} size={12}>
                    <b className='ui-m-5-b ui-inline-block'>
                        {`${text?.next}"${dates?.defined2}"`}
                    </b>
                    <Calendar className='ui-shadow' data={{ date: dates?.defined2 }} />
                </Grid.Col>
                <Grid.Col lg={{ size: 5, offset: 1 }} size={12}>
                    <b className='ui-m-5-b ui-inline-block'>
                        {`${text?.month}"${dates?.defined3}"`}
                    </b>
                    <Calendar className='ui-shadow' data={{ date: dates?.defined3 }} />
                </Grid.Col>
                <Grid.Col lg={{ size: 5 }} size={12}>
                    <b className='ui-m-5-b ui-inline-block'>
                        {`${text?.yearMonth}"${dates?.defined4}"`}
                    </b>
                    <Calendar className='ui-shadow' data={{ date: dates?.defined4 }} />
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Heading as='h3' id={title?.hash[2]}>
            {title?.h3[2]}
        </Heading>

        <Description>{desc?.details}</Description>
        <Preview>
            <Grid.Row>
                <Grid.Col lg={{ size: 6, offset: 3 }} size={12}>
                    <Calendar className='ui-round ui-shadow ui-theme-purpleBlue' data={{ date: dates?.details, json: JSON.stringify(details) }} />
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Heading as='h3' id={title?.hash[3]}>
            {title?.h3[3]}
        </Heading>

        <Description>{desc?.pickers}</Description>
        <Preview>
            <Grid.Row>
                <Grid.Col size={12} className='ui-round-1st'>
                    <Calendar.Picker inline='always' className='ui-m-20-r ui-sm-no-m' />
                    <Spacer size={10} className='ui-visible-sm' />
                    <Calendar.Picker inline='always' value={dates?.picker} />
                </Grid.Col>
            </Grid.Row>
            <Grid.Row className='ui-round-2nd'>
                <Grid.Col lg={{ size: 5, offset: 1 }} size={12}>
                    <Calendar.Picker />
                </Grid.Col>
                <Grid.Col lg={{ size: 5 }} size={12}>
                    <Calendar.Picker value={dates?.picker} />
                </Grid.Col>
            </Grid.Row>
        </Preview>
        </>
    );
}
