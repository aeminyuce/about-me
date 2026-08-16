import React from 'react';
import Button from '@ui/Button';
import Item from '@ui/Item';
import SvgIcon from '@ui/SvgIcon';

// misc
import type { ShowCodeProps } from '@models/Lab';
import { scrollToHash } from '@helpers/General';

// assets
import { IconCode } from '@icon/general/code';

export default function (props: ShowCodeProps) {
    const { id } = props;

    return (
        <Item as='div' className='lab-show-code ui-m-5-b ui-float-r ui-no-float-xs ui-xs-align-c'>
            <Button square ghost title='Show Code' className='ui-round' onClick={() => scrollToHash(id)}>
                <SvgIcon as='js' src={IconCode} />
            </Button>
        </Item>
    )
}
