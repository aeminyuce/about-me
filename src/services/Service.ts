const serviceHeaders = {
    'apikey': process.env.API_KEY ?? '',
    'Content-Type': 'application/json',
}

const errorHandler = (status: any) => {
    const code = String(status);

    if (code.startsWith('4') && window.location.pathname !== '/404') {
        window.location.href = '/404';
    }

    if (code.startsWith('5') && window.location.pathname !== '/500') {
        window.location.href = '/500';
    }

    if (code === 'apiError' && window.location.pathname !== '/api-error') {
        window.location.href = '/api-error';
    }
}

export default class Service {
    get = async (url: string, params?: any) => {
        let response = null;

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
        }
    }

    post = async (url: string, body?: any) => {
        let response = null;

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
        }
    }

}