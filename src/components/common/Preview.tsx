import * as React from 'react';
import Button from 'uilab/react/Button';
import Code from 'uilab/react/Code';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import type { PreviewProps } from '../../models/Page';

// assets
import { IconCode } from 'uilab-icons/react/general/code';

export default function (props:PreviewProps) {
    const { children, code, onClick } = props;

    return (
        <div className='preview ui-highlight ui-round ui-shadow-in-sm'>
            <div className='ui-round-t'>
                {children}
            </div>
            {code &&
                <Code clipboard className='ui-round-b'>
                    <Code.Comment>JS</Code.Comment>
                    <Code.Lines>
{code}
                    </Code.Lines>
                    <Button size='sm' title='Run Code' className='ui-m-15 ui-round ui-set-absolute ui-set-r ui-set-b ui-theme-blue ui-fill-dark-100'
                        onClick={onClick}>
                        <SvgIcon as='js' src={IconCode} /> Run
                    </Button>
                </Code>
            }
        </div>
    );
}
