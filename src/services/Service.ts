import { getParamsFromObject } from '../utils/Helpers';
import { ui } from 'uilab/js/core/globals';
import Loadingmask from 'uilab/react/Loadingmask';

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

        } finally {
            setTimeout(() => {
                // hide page loader
                Loadingmask('.ui-loading-mask');
            }, ui.globals.ease * 3);
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

        } finally {
            setTimeout(() => {
                // hide page loader
                Loadingmask('.ui-loading-mask');
            }, ui.globals.ease * 3);
        }
    };

}