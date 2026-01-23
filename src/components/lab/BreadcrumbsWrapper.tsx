import * as React from 'react';
import Breadcrumbs from 'uilab/react/Breadcrumbs';

// misc
import type { BreadcrumbsWrapperProps } from '../../models/Lab';

export default function (props: BreadcrumbsWrapperProps) {
    const { children } = props;
    const classes = 'ui-opacity';

    return (
        <Breadcrumbs className='ui-p-10-b ui-m-30-b ui-border-b ui-border-light ui-ease-2nd-layout'>
            <Breadcrumbs.Item position={'1'} to='/' className={classes}>Home</Breadcrumbs.Item>
            <Breadcrumbs.Item position={'2'} to='/lab' className={classes}>Lab</Breadcrumbs.Item>
            {children}
        </Breadcrumbs>
    );
}
