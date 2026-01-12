import * as React from 'react';
import Button from 'uilab/react/Button';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import type { PreviewProps } from '../../models/Page';

// assets
import { IconPlay } from 'uilab-icons/react/media/play';

export default function (props:PreviewProps) {
    const { children, play } = props;

    return (
        <div className='preview ui-m-30-b ui-border ui-border-dual ui-round ui-shadow-in-sm ui-set-relative'>
            {children}
            <Button size='sm' className='ui-m-15 ui-round-inner ui-set-absolute ui-set-t ui-set-r ui-theme-blue ui-fill-dark-100'
                onClick={play}>
                <SvgIcon as='js' src={IconPlay} size='xs' />
                <span className="ui-m-5-l ui-inline-block">Play</span>
            </Button>
        </div>
    );
}
