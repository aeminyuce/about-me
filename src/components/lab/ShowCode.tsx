import React from 'react';
import Button from '@ui/Button';
import SvgIcon from '@ui/SvgIcon';

// misc
import type { ShowCodeProps } from '@models/Lab';
import { scrollToHash } from '@helpers/General';

// assets
import { IconCode } from '@icon/general/code';

export default function (props: ShowCodeProps) {
    const { id, className } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-round${setClassName}`;

    return (
        <Button square ghost title='Show Code' className={classes} onClick={() => scrollToHash(id)}>
            <SvgIcon as='js' src={IconCode} />
        </Button>
    )
}
