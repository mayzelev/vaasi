import vaasiApiClient from './apiClient';

export async function getUsers() {
    return await vaasiApiClient.get('/users');
}

export async function getUser(id) {
    const response = await vaasiApiClient.get(`/users/${id}`);

    return response.data;
}

export async function updateUser(id, body) {
    return vaasiApiClient.put(`/users/${id}`, body);
}

export async function getCompany(id) {
    const response = await vaasiApiClient.get(`/companies/${id}`);
    return response.data;
}

export async function updateCompany(id, body) {
    return vaasiApiClient.put(`/companies/${id}`, body);
}
