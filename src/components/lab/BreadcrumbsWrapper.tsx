import * as React from 'react';
import Breadcrumbs from 'uilab/react/Breadcrumbs';

// misc
import type { BreadcrumbsWrapperProps } from '../../models/Lab';

export default function (props: BreadcrumbsWrapperProps) {
    const { children } = props;

    return (
        <Breadcrumbs seoFriendly sep='bull' className='ui-p-10-b ui-m-30-b ui-border-b ui-border-light ui-ease-2nd-layout'>
            <Breadcrumbs.Item seoFriendly pos={'1'} to='/' className={'ui-opacity'}>Home</Breadcrumbs.Item>
            <Breadcrumbs.Item seoFriendly pos={'2'} to='/lab' className={'ui-opacity'}>Lab</Breadcrumbs.Item>
            <Breadcrumbs.Item seoFriendly pos={'3'}>{children}</Breadcrumbs.Item>
        </Breadcrumbs>
    );
}
