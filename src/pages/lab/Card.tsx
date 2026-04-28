import * as React from 'react';
import Card from 'uilab/react/Card';
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
    const title = headings('card');

    const card = api?.lab?.card;
    const desc = card?.desc;
    const text = card?.text;

    if (card) return (
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
                    <Card>...</Card>
                </Grid.Col>
                <Grid.Col lg={{ size: 5 }} size={12}>
                    <Card>...</Card>
                </Grid.Col>
            </Grid.Row>
        </Preview>
        </>
    );
}
