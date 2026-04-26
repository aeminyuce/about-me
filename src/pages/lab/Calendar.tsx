import * as React from 'react';
import Calendar from 'uilab/react/Calendar';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';
import { headings } from '../../helpers/Lab';

// assets
import { IconAi } from 'uilab-icons/react/general/ai';

export default function () {
    const { api } = useStoreContext();
    const title = headings('calendar');

    const calendar = api?.lab?.calendar;
    const desc = calendar?.desc;
    const dates = calendar?.dates;
    const details = calendar?.details;

    return (
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

        <Description>{desc?.details}</Description>
        <Preview>
            <Grid.Row>
                <Grid.Col lg={{ size: 6, offset: 3 }} size={12}>
                    {details &&
                        <Calendar className='ui-round' data={{ date: dates?.details, json: JSON.stringify(details) }} />
                    }
                </Grid.Col>
            </Grid.Row>
        </Preview>
        </>
    );
}
