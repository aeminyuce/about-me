import { modalOpen } from 'uilab/react/Modal';

// get in touch modal
export const ShowGetInTouch = () => {
    modalOpen({
        source: '.getInTouchModal',
        size: 'sm',
    });
};