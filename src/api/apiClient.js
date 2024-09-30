import axios from 'axios';
import { JWT_EXPIRED, TOKEN_KEY } from '../shared/constants';

const BASE_URL = 'https://www.devsm.space';

const vaasiApiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

vaasiApiClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

vaasiApiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // window.location.href = window.location.origin + '/vaasi/';
        if (error.response.status === 401 || error?.response?.data?.message === JWT_EXPIRED) {
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);

export default vaasiApiClient;
