import React from 'react';
import Button from '@ui/Button';
import SvgIcon from '@ui/SvgIcon';
import Tooltip from '@ui/Tooltip';

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

    // values
    const randomNum = String(Math.floor(1000 + Math.random() * 9000)); // 4 digits
    const randomId = `code-${randomNum}-tooltip`;

    return (
        <>
        <Tooltip id={randomId}>Show Code Examples</Tooltip>
        <Button square ghost className={classes}
            data={{ 'tooltip': 'l', 'id': randomId, 'only': 'desktop' }} onClick={() => scrollToHash(id)}>
            <SvgIcon as='js' src={IconCode} />
        </Button>
        </>
    )
}
