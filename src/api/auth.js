import vaasiApiClient from './apiClient';

export const INVALID_USER = 'Invalid user';

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

// a142efcd-fd59-42f9-a3c8-cf2f7f6f8f23
// a142efcd-fd59-42f9-a3c8-cf2f7f6f8f28 Legal