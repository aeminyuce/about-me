import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import Modal, { modalOpen } from 'uilab/react/Modal';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import GetImage from './GetImage';

// get in touch modal
export const ShowGetInTouch = () => {
    modalOpen({
        source: '.getInTouchModal',
        size: 'sm',
    });
};

export const GetInTouchButtons = () => {
    const { api } = useStoreContext();
    const getInTouchText = api?.home?.aboutMe?.getInTouchText;

    return (
        <Button.Wrapper as='div' largeButtons ease='1st' className='ui-circle-1st'>
            <Button noease className='ui-bg-black ui-visible-light' title={getInTouchText} onClick={ShowGetInTouch}>
                {getInTouchText}
            </Button>
            <Button noease className='ui-bg-white ui-visible-dark' title={getInTouchText} onClick={ShowGetInTouch}>
                {getInTouchText}
            </Button>
        </Button.Wrapper>
    )
}

export default function () {
    const { api } = useStoreContext();
    const getInTouch = api?.header?.getInTouch;

    return (
        <Modal as='div' className='getInTouchModal'>
            <Modal.Container>
                <Grid.Static fluid='no'>
                    <Grid.Col size={133} className='ui-p-10'>
                        <GetImage fluid src={getInTouch?.qrCodeImage} aspect='square' />
                    </Grid.Col>
                    <Grid.Row>
                        <Grid.Col size={12}>
                            <strong className='ui-font-24'>{getInTouch?.title}</strong>
                            <p className='ui-font-16 ui-font-condensed ui-m-10-t'>
                                {getInTouch?.messageStart}
                                <strong>{getInTouch?.messageHighlight}</strong>
                                {getInTouch?.messageEnd}
                            </p>
                        </Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Modal.Container>
        </Modal>
    )
}