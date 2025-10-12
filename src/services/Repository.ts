import Service from './Service';
import { PAGE_API_URL } from './ServiceUrls';

// get
export const getPageData = async (service: Service, params?: any) => {
    return service.get(PAGE_API_URL, params);
};

// post
export const postPageData = async (service: Service, body?: any) => {
    return service.post(PAGE_API_URL, body);
};