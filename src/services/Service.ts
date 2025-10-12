import { getParamsFromObject } from '../utils/Helpers';

export default class Service {
    get = async (url: string, params: any) => {
        let response = null;
        url = params ? getParamsFromObject(url, params) : url;

        const headers = {
            'Content-Type': 'application/json',
        };

        try {

            response = await fetch(url, {
                method: 'GET',
                headers: headers,
            });

            const result = await response.json();
            return result;

        } catch (e: any) {
            // run error logger
        }
    };

    post = async (url: string, body: any) => {
        let response = null;

        const headers = {
            'Content-Type': 'application/json',
        };

        try {

            response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: body ?? JSON.stringify(body),
            });

            const result = await response.json();
            return result;

        } catch (e: any) {
            // run error logger
        }
    };

}