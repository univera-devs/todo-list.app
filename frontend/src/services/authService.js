import { http } from './httpService';

export async function signUp(data) {
  const response = await http.post('/api/register', data);
  return response.data;
}


