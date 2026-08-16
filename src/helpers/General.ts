import { modalOpen } from '@ui/Modal';

// scroll to top of page
export const scrollToTop = () => {
    window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
    });
}

// scroll to hash
export const scrollToHash = (id: string) => {
    window.requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView(true);
    });
}

// open get in touch modal
export const showGetInTouch = () => {
    modalOpen({
        source: '#getInTouchModal',
        size: 'sm',
    });
}