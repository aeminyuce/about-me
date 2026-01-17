import * as React from 'react';
import Button from 'uilab/react/Button';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import type { PreviewProps } from '../../models/Page';

// assets
import { IconPlay } from 'uilab-icons/react/media/play';

export default function (props:PreviewProps) {
    const { children, play, playPos } = props;

    const positions = {
        'tl': 'ui-set-t ui-set-l',
        'tr': 'ui-set-t ui-set-r',
        'br': 'ui-set-b ui-set-r',
        'bl': 'ui-set-b ui-set-l',
    };

    let classes = 'ui-m-15 ui-round-inner ui-set-absolute ui-theme-blue ui-fill-dark-100';

    if (play) {
        classes += ` ${positions[playPos]}`;
    }

    return (
        <div className='preview ui-m-30-b ui-border ui-border-dual ui-round ui-shadow-in-sm ui-set-relative'>
            {children}
            {play &&
                <Button size='sm' className={classes} onClick={play}>
                    <SvgIcon as='js' src={IconPlay} size='xs' />
                    <span className='ui-m-5-l ui-inline-block'>Play</span>
                </Button>
            }
        </div>
    );
}
