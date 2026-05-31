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
    const values = charts?.dates;

    if (charts) return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>{desc?.line}</Description>
        <Preview>
            ...
        </Preview>
        </>
    );
}
