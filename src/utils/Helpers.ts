// convert object to url params
export const getParamsFromObject = (url: string, obj: any) => {
    let params = '';

    if (obj) {
        Object.keys(obj).forEach((key: string, index: number) => {
            const startsWith = index === 0 ? '?' : '&';
            params += startsWith + key + '=' + obj[key];
        });

        url += params;
    }

    return url;
}

// get selected position for mobile navigation
export const mobileNavPosition = (navLinks: any[], pathname: string) => {
    return navLinks ? navLinks.findIndex(item => item.to === pathname) + 1 : 1;
};