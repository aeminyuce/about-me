import * as React from 'react';
import Breadcrumbs from 'uilab/react/Breadcrumbs';

// misc
import type { BreadcrumbsWrapperProps } from '../../models/Lab';

export default function (props:BreadcrumbsWrapperProps) {
    const { children } = props;
    const classes = 'ui-opacity ui-ease-layout';

    return (
        <Breadcrumbs className='ui-p-10-b ui-m-30-b ui-border-b ui-border-light'>
            <Breadcrumbs.Item to='/' className={classes}>Home</Breadcrumbs.Item>
            <Breadcrumbs.Item to='/lab' className={classes}>Lab</Breadcrumbs.Item>
            {children}
        </Breadcrumbs>
    );
}
