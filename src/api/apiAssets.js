import vaasiApiClient from './apiClient.js';

export async function getAssets() {
    const response = await vaasiApiClient.get(`/assets`);
    return response.data;
}

export async function getAssetsCompany() {
    const response = await vaasiApiClient.get(`/assets-cmp`);
    return response.data;
}
