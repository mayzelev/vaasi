import vaasiApiClient from './apiClient';

export const INVALID_USER = 'Invalid user';
export const USER_EMAIL_EXIST = 'Email exists';
export const USER_PHONE_EXIST = 'Phone exists';

export function authUser(body) {
    return vaasiApiClient.post(`/auth/user/signup`, body);
}

export function loginUser(body) {
    return vaasiApiClient.post(`/auth/user/login`, body);
}

export function authCompany(body) {
    return vaasiApiClient.post(`/auth/company/signup`, body);
}

export function loginCompany(body) {
    return vaasiApiClient.post(`/auth/company/login`, body);
}
