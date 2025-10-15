import { ui } from 'uilab/js/core/globals';
import Loadingmask from 'uilab/react/Loadingmask';
import { getParamsFromObject } from '../utils/Helpers';

let activeFetches = 0;

const serviceHeaders = {
    'Content-Type': 'application/json',
};

const hidePageLoader = () => {
    activeFetches--;

    if (activeFetches === 0) setTimeout(() => {
        Loadingmask();
    }, ui.globals.slow);
};

export default class Service {
    get = async (url: string, params: any) => {
        let response = null;
        activeFetches++;

        url = params ? getParamsFromObject(url, params) : url;

        try {

            response = await fetch(url, {
                method: 'GET',
                headers: serviceHeaders,
            });

            return await response.json();

        } catch (e: any) {
            // run error logger

        } finally { hidePageLoader(); }
    };

    post = async (url: string, body: any) => {
        let response = null;
        activeFetches++;

        try {

            response = await fetch(url, {
                method: 'POST',
                headers: serviceHeaders,
                body: body ?? JSON.stringify(body),
            });

            return await response.json();

        } catch (e: any) {
            // run error logger

        } finally { hidePageLoader(); }
    };

}