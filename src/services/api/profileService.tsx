import { apiClient, buildQueryParams } from './apiClient';

export async function getProfile() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/profile`;
  return apiClient(url, { method: 'GET' });
}
