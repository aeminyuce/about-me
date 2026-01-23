import * as React from 'react';
import Breadcrumbs from 'uilab/react/Breadcrumbs';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';

// misc
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';

// assets
import { IconUser } from 'uilab-icons/react/general/user';

export default function () {
    const underlineWrapperClasses = 'ui-color-black-25 ui-font-hoverline-2nd';

    const opacityWrapperClasses = 'ui-ease-2nd-layout';
    const opacityClasses = 'ui-opacity';

    return (
        <>
        <BreadcrumbsWrapper>
            <Breadcrumbs.Item position={'3'}>Breadcrumbs</Breadcrumbs.Item>
        </BreadcrumbsWrapper>

        <Heading as='h1'>Breadcrumbs</Heading>

        <Description>
            Simple breadcrumb navigation with linked items separated by a bullet symbol. In the first variant, links show an underline on hover; in the second, links change opacity on hover.        </Description>
        <Preview>
            <Breadcrumbs className={underlineWrapperClasses}>
                <Breadcrumbs.Item position={'1'} to='#'>Home</Breadcrumbs.Item>
                <Breadcrumbs.Item position={'2'} to='#'>Search Results</Breadcrumbs.Item>
                <Breadcrumbs.Item position={'3'}>
                    <strong>Details</strong>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs className={opacityWrapperClasses}>
                <Breadcrumbs.Item position={'1'} className={opacityClasses} to='#'>Home</Breadcrumbs.Item>
                <Breadcrumbs.Item position={'2'} className={opacityClasses} to='#'>Search Results</Breadcrumbs.Item>
                <Breadcrumbs.Item position={'3'}>Details</Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        </>
    );
}
