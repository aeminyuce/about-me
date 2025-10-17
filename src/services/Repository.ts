import Service from './Service';
import { PAGE_API_URL, HOME_API_URL } from './ServiceUrls';

// get
export const getPageData = async (service: Service, params?: any) => {
    return service.get(PAGE_API_URL, params);
};

export const getHomeData = async (service: Service, params?: any) => {
    return service.get(HOME_API_URL, params);
};