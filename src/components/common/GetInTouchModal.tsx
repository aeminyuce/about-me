import React from 'react';
import Grid from '@ui/Grid';
import Image from '@ui/Image';
import Item from '@ui/Item';
import Modal from '@ui/Modal';

// misc
import { useStoreContext } from '@stores/StoreContext';

export default function () {
    const { api } = useStoreContext();
    const getInTouch = api?.header?.getInTouch;

    if (getInTouch) return (
        <Modal as='div' id='getInTouchModal'>
            <Modal.Container>
                <Grid.Static fluid='no'>
                    <Grid.Col size={133} className='ui-p-10'>
                        <Image lazy fetchPriority='low' fluid='all' src={getInTouch?.qrCodeImage} aspect='square' />
                    </Grid.Col>
                    <Grid.Row>
                        <Grid.Col size={12}>
                            <Item as='b' className='ui-font-24'>{getInTouch?.title}</Item>
                            <Item as='p' className='ui-font-16 ui-font-condensed ui-m-10-t'>
                                {getInTouch?.messageStart}
                                <Item as='b'>{getInTouch?.messageHighlight}</Item>
                                {getInTouch?.messageEnd}
                            </Item>
                        </Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Modal.Container>
        </Modal>
    )
}