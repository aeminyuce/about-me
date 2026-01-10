import * as React from 'react';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../states/StoreContext';

// assets
import { IconSoundwave } from 'uilab-icons/react/media/soundwave';

export const LeadText = () => {
    const { apiResponse } = useStoreContext();

    return (
        <div className='ui-p-30 ui-sm-no-p ui-theme-yellowOrange ui-text'>
        <p className='ui-font-22 ui-font-readable ui-m-15-b'>
            {apiResponse?.lab?.intro?.leadText}
        </p>
        <SvgIcon as='js' src={IconSoundwave} size='xxl' className='ui-m-30-t' />
        </div>
    )
}

export const Paragraphs = () => {
    const { apiResponse } = useStoreContext();
    const intro = apiResponse?.lab?.intro;

    const textPart1 = intro?.textPart1;
    const textPart2 = intro?.textPart2;
    const textPart3 = intro?.textPart3;

    return (
        <p className='ui-font-18 ui-font-readable ui-p-30 ui-sm-no-p ui-m-30-h'>
            {textPart1 && textPart1}
            <br /><br />
            {textPart2 && textPart2}
            <br /><br />
            {textPart3 && textPart3}
        </p>
    )
}