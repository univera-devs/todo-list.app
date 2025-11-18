import { http } from './httpService';

export async function signUp(data) {
  const response = await http.post('/api/register', data);
  return response.data;
}

export async function login(data) {
  const response = await http.post('/api/login', data);
  return response.data;
}

export async function logout(data) {
  const response = await http.post('/api/logout', data);
  return response.data;
}
