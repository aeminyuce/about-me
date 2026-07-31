import React from 'react';
import Button from '@ui/Button';

// misc
import { useStoreContext } from '@stores/StoreContext';
import { showGetInTouch } from '@helpers/General'

export default function () {
    const { api } = useStoreContext();
    const getInTouchText = api?.home?.aboutMe?.getInTouchText;

    return (
        <Button.Wrapper as='div' largeButtons ease='1st' className='ui-circle-1st'>
            <Button noease className='ui-bg-black ui-shown-light' title={getInTouchText} onClick={showGetInTouch}>
                {getInTouchText}
            </Button>
            <Button noease className='ui-bg-white ui-shown-dark' title={getInTouchText} onClick={showGetInTouch}>
                {getInTouchText}
            </Button>
        </Button.Wrapper>
    )
}