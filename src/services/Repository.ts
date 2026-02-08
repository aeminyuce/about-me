import Service from './Service';

// get
export const getPageData = async (service: Service) => {
    return service.get(`${process.env.API_URL}/get_page`);
};

export const getHomeData = async (service: Service) => {
    return service.get(`${process.env.API_URL}/get_home`);
};
export const getHomeFeaturedData = async (service: Service) => {
    return service.get(`${process.env.API_URL}/get_home_featured`);
};

export const getLabData = async (service: Service, page?: any) => {
    const getPage = page ? `_${page}` : '';
    return service.get(`${process.env.API_URL}/get_lab${getPage}`);
};

export const getIconsData = async (service: Service) => {
    return service.get(`${process.env.API_URL}/get_icons`);
};

export const getBlogData = async (service: Service, params?: any) => {
    return service.get(`${process.env.API_URL}/get_blog`, params);
};