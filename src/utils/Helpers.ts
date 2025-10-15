import { modalOpen } from 'uilab/react/Modal';

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

// get in touch modal
export const ShowGetInTouch = () => {
    modalOpen({
        source: '.getInTouchModal',
        size: 'sm',
    });
};