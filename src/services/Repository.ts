import Service from './Service';

// get
export const getPageData = async (service: Service, params?: any) => {
    return service.get(`${process.env.API_URL}/get_page`, params);
};

export const getHomeData = async (service: Service, params?: any) => {
    return service.get(`${process.env.API_URL}/get_home`, params);
};