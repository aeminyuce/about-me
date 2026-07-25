import { modalOpen } from 'uilab/react/Modal';

// scroll to top of page
export const scrollToTop = () => {
    window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
    });
}

// open get in touch modal
export const showGetInTouch = () => {
    modalOpen({
        source: '#getInTouchModal',
        size: 'sm',
    });
}