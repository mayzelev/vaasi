import vaasiApiClient from './apiClient';

export async function getUsers() {
    const response = await vaasiApiClient.get('/users');

    return response;
}

export async function getUser(id) {
    const response = await vaasiApiClient.get(`/users/${id}`);

    return response.data.find((user) => user.id === id);
}
