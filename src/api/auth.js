import vaasiApiClient from './apiClient';

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

// c1884390-5540-4c22-8b19-2fb02a8196da
