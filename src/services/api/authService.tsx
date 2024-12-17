import { apiClient } from './apiClient';

export async function registerUser(data) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/register`;
  // const raw = JSON.stringify(data);
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" // Ensure the request is sent as JSON
    },
    body: data
  };
  // console.log(raw)
  console.log(url)
  return apiClient(url, options);
}
