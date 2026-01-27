import * as React from 'react';
import Button from 'uilab/react/Button';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';
import { headings } from '../../helpers/Lab';

// assets
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconAngleRight } from 'uilab-icons/react/general/angle-right';

export default function () {
    const title = headings('buttons');

    const desc = {};
    const text = {};

    // classes
    const button = {
        base: '',
    };

    return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Description>
            Lorem ipsum dolor sit amet.
        </Description>
        <Preview>
            <Button>Button</Button>
        </Preview>
        </>
    );
}
