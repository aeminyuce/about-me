// scroll to top of page
export const scrollToTop = () => {
    window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
    });
}