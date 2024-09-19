import vaasiApiClient from './apiClient.js';

export async function getBalanceCode() {
    const response = await vaasiApiClient.get(`/code`);
    return response.data;
}
