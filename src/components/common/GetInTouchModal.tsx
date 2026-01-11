import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import Modal, { modalOpen } from 'uilab/react/Modal';

// misc
import { useStoreContext } from '../../states/StoreContext';

// get in touch modal
export const ShowGetInTouch = () => {
    modalOpen({
        source: '.getInTouchModal',
        size: 'sm',
    });
};

export const GetInTouchButtons = () => {
    const { apiResponse } = useStoreContext();
    const getInTouchText = apiResponse?.home?.aboutMe?.getInTouchText;

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
    const { apiResponse } = useStoreContext();
    const getInTouch = apiResponse?.header?.getInTouch;

    const qrCodeImage = getInTouch?.qrCodeImage;
    const title = getInTouch?.title;

    const messageStart = getInTouch?.messageStart;
    const messageHighlight = getInTouch?.messageHighlight;
    const messageEnd = getInTouch?.messageEnd;

    return (
        <Modal as='div' className='getInTouchModal'>
            <Modal.Container>
                <Grid.Static fluid='no'>
                    <Grid.Col size={133} className='ui-p-10'>
                        {qrCodeImage &&
                            <img src={`/images/${qrCodeImage}`} className='ui-img-fluid' />
                        }
                    </Grid.Col>
                    <Grid.Row>
                        <Grid.Col size={12}>
                            {title &&
                                <strong className='ui-font-24'>{title}</strong>
                            }

                            {(messageStart || messageHighlight || messageEnd) &&
                                <p className='ui-font-16 ui-font-condensed ui-m-10-t'>
                                    {messageStart}
                                    <strong>{messageHighlight}</strong>
                                    {messageEnd}
                                </p>
                            }
                        </Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Modal.Container>
        </Modal>
    )
}