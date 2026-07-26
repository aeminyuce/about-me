import React from 'react';
import Button from '@ui/Button';
import SvgIcon from '@ui/SvgIcon';

// assets
import { IconSun } from '@icon/weather/sun';
import { IconMoon } from '@icon/weather/moon';;

export default function () {
    return (
        <Button square ghost title='Toggle Dark Mode' className='ui-darkmode-toggle ui-round ui-m-5-l'>
            <SvgIcon as='js' src={IconMoon} opacity='half' className='ui-visible-dark' />
            <SvgIcon as='js' src={IconSun} opacity='half' className='ui-visible-light' />
        </Button>
    )
}