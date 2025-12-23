// get selected position for mobile navigation
export const mobileNavPosition = (navLinks: any[], pathname: string) => {
    return navLinks ? navLinks.findIndex(item => item.to === pathname) + 1 : 1;
};