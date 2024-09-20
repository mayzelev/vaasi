import vaasiApiClient from './apiClient.js';

export async function getBalanceCode() {
    const response = await vaasiApiClient.get(`/code`);
    return response.data;
}

export async function updateBalanceCode(id, body) {
    const response = await vaasiApiClient.put(`/code/${id}`, body);
    return response.data;
}
