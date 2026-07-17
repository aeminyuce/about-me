import Loadingmask from 'uilab/react/Loadingmask';

let activeFetches = 0;

const serviceHeaders = {
    'apikey': process.env.API_KEY ?? '',
    'Content-Type': 'application/json',
}

const hidePageLoader = () => {
    activeFetches--;

    if (activeFetches === 0) setTimeout(() => {
        Loadingmask();
    }, 400);
}

const errorHandler = (status: any) => {
    const code = String(status);

    if ((code.startsWith('4') || code.startsWith('5')) && window.location.pathname !== '/' + code) {
        hidePageLoader();
        window.location.href = '/' + code;
    }

    if (code === 'apiError' && window.location.pathname !== '/api-error') {
        hidePageLoader();
        window.location.href = '/api-error';
    }
}

export default class Service {
    get = async (url: string, params?: any) => {
        let response = null;

        activeFetches++;
        if (params) url += params;

        try {

            response = await fetch(url, {
                method: 'GET',
                headers: serviceHeaders,
            });

            errorHandler(response.status);
            return await response.json();

        } catch (e: any) {
            errorHandler('apiError');
            // run error logger

        } finally { hidePageLoader(); }
    }

    post = async (url: string, body?: any) => {
        let response = null;
        activeFetches++;

        try {

            response = await fetch(url, {
                method: 'POST',
                headers: serviceHeaders,
                body: body ? JSON.stringify(body) : undefined,
            });

            errorHandler(response.status);
            return await response.json();

        } catch (e: any) {
            errorHandler('apiError');
            // run error logger

        } finally { hidePageLoader(); }
    }

}