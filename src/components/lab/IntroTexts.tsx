import * as React from 'react';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';

// assets
import { IconSoundwave } from 'uilab-icons/react/media/soundwave';

export const LeadText = () => {
    const { api } = useStoreContext();

    return (
        <div className='ui-p-30 ui-sm-no-p ui-theme-yellowOrange ui-text'>
            <p className='ui-font-22 ui-font-readable ui-m-25-b'>
                {api?.lab?.intro?.leadText}
            </p>
            <SvgIcon as='js' src={IconSoundwave} size='xxl' className='ui-m-30-v' />
        </div>
    )
}

export const Paragraphs = () => {
    const { api } = useStoreContext();
    const intro = api?.lab?.intro;

    return (
        <p className='ui-font-18 ui-font-readable ui-p-30-h ui-sm-no-p-h ui-m-30-h'>
            {intro?.textPart1}
            <br /><br />
            {intro?.textPart2}
            <br /><br />
            {intro?.textPart3}
        </p>
    )
}