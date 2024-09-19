import vaasiApiClient from './apiClient.js';

export async function getFiles() {
    const response = await vaasiApiClient.get(`/files`);
    return response.data;
}

export async function getFilesCompany() {
    const response = await vaasiApiClient.get(`/files-cmp`);
    return response.data;
}

export async function downloadFile(id) {
    return vaasiApiClient.get(`/files/download/${id}`, {
        responseType: 'blob'
    });
}

export async function downloadFileCompany(id) {
    return vaasiApiClient.get(`/files-cmp/download/${id}`, {
        responseType: 'blob'
    });
}
