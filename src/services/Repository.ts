import Service from './Service';
import { PAGE_API_URL, CALENDAR_API_URL } from './ServiceUrls';

// get
export const getPageData = async (service: Service, params?: any) => {
    return service.get(PAGE_API_URL, params);
};

export const getCalendarData = async (service: Service, params?: any) => {
    return service.get(CALENDAR_API_URL, params);
};