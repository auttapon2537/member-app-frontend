import { apiClient, buildQueryParams } from './apiClient';

export async function getPrivileges(filters: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/privileges`;
  const queryParams = await buildQueryParams(filters);
  const fullUrl = queryParams ? `${url}?${queryParams}` : url;
  return apiClient(fullUrl, { method: 'GET' });
}

export async function getPrivilege(id: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/privileges/${id}`;
  return apiClient(url, { method: 'GET' });
}

export async function getPrivilegeByUserID(user_id: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/privileges/user/${user_id}`;
  return apiClient(url, { method: 'GET' });
}

export async function getPrivilegeByID(privilege_id: any, user_id: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/privileges/${privilege_id}/user/${user_id}`;
  return apiClient(url, { method: 'GET' });
}

export async function redeemPrivilege(data: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/privileges/redeem`;
  const raw = JSON.stringify(data);
  const options = {
    method: 'POST',
    body: raw,
  };
  return apiClient(url, options);
}
