import axios from 'axios';
import { INVALID_TOKEN, JWT_EXPIRED, TOKEN_KEY, USER_ID } from '../shared/constants';
import useModalStore from '../store/useModalStore';

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
        if (error?.response?.data?.message === JWT_EXPIRED || INVALID_TOKEN) {
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(USER_ID);
            const openSessionExpired = useModalStore.getState().openSessionExpired;
            openSessionExpired();
        }
        return Promise.reject(error);
    }
);

export default vaasiApiClient;

// error.response.status === 401 ||
