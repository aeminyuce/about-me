import * as React from 'react';
import Breadcrumbs from 'uilab/react/Breadcrumbs';
import Button from 'uilab/react/Button';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';

// assets
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconAngleRight } from 'uilab-icons/react/general/angle-right';

export default function () {
    return (
        <>
        <BreadcrumbsWrapper>
            <Breadcrumbs.Item seoFriendly pos={'3'}>Buttons</Breadcrumbs.Item>
        </BreadcrumbsWrapper>

        <Heading as='h1'>Buttons</Heading>

        <Description>
            Lorem ipsum dolor sit amet.
        </Description>
        <Preview>
            <Button>Button</Button>
        </Preview>
        </>
    );
}
