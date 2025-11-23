import * as React from 'react';
import Button from 'uilab/react/Button';
import SvgIcon from 'uilab/react/SvgIcon';

// assets
import { IconSun } from 'uilab-icons/react/weather/sun';
import { IconMoon } from 'uilab-icons/react/weather/moon';;

export default function () {
    return (
        <Button square ghost title='Toggle Dark Mode' className='ui-darkmode-toggle ui-round ui-m-5-l'>
            <SvgIcon as='js' src={IconMoon} opacity='half' className='ui-visible-dark' />
            <SvgIcon as='js' src={IconSun} opacity='half' className='ui-visible-light' />
        </Button>
    )
}