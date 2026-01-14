import * as React from 'react';
import Breadcrumbs from 'uilab/react/Breadcrumbs';

// misc
import type { BreadcrumbsWrapperProps } from '../../models/Lab';

export default function (props:BreadcrumbsWrapperProps) {
    const { children } = props;

    return (
        <Breadcrumbs className='ui-p-10-b ui-m-30-b ui-border-b ui-border-light ui-hover-opacity-2nd'>
            <Breadcrumbs.Item to='/'>Home</Breadcrumbs.Item>
            { children }
        </Breadcrumbs>
    );
}
