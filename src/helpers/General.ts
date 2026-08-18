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

        if (el) {
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;

            const header = document.querySelector('.ui-header-sticky') as HTMLElement | null;
            const headerHeight = header ? header.offsetHeight : 0;

            window.scrollTo(0, elementPosition - headerHeight);
        }
    });
}

// open get in touch modal
export const showGetInTouch = () => {
    modalOpen({
        source: '#getInTouchModal',
        size: 'sm',
    });
}