import React from 'react';
import Button from '@ui/Button';
import Item from '@ui/Item';
import SvgIcon from '@ui/SvgIcon';

// misc
import type { PreviewProps } from '@models/Page';

// assets
import { IconPlay } from '@icon/media/play';

export default function (props: PreviewProps) {
    const { children, play, playPos, className } = props;

    const positions = Object.freeze({
        'tl': 'ui-set-t ui-set-l',
        'tr': 'ui-set-t ui-set-r',
        'br': 'ui-set-b ui-set-r',
        'bl': 'ui-set-b ui-set-l',
    });

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `preview ui-m-30-b ui-border ui-border-dual ui-round ui-shadow-in-sm ui-set-relative${setClassName}`;

    let buttonClasses = 'ui-m-15 ui-round-inner ui-set-absolute ui-theme-blue ui-fill-dark-100';

    if (playPos) {
        buttonClasses += ` ${positions[playPos]}`;
    }

    return (
        <Item as='div' className={classes}>
            {children}
            {play &&
                <Button size='sm' className={buttonClasses} onClick={play}>
                    <SvgIcon as='js' src={IconPlay} size='xs' r={5} />
                    <Item as='span' className='ui-inline-block'>Play</Item>
                </Button>
            }
        </Item>
    )
}
