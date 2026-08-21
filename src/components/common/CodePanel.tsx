import React from 'react';
import Code from '@ui/Code';

// misc
import type { CodePanelProps } from '@models/Page';

export default function (props: CodePanelProps) {
    const { children, type, id } = props;

    const info = Object.freeze({
        'react': 'tsx',
        'js': 'js',
        'css': 'css',
    });

    return (
        <>
        <Code.Panel copySource toggleScroll id={id} info='Code Examples' className='ui-m-1-b ui-round-t' />
        <Code lines scroll type={type} className='ui-no-round'>
            {String(children)}
        </Code>
        <Code.Panel info={info[type]} className='ui-m-1-t ui-round-b' />
        </>
    )
}
