import { http } from '../httpService';

export async function listTodos(data) {
    const response = await http.get('/api/tasks', data);
    return response.data;
}

export async function createTodo(data) {
    const response = await http.post('/api/tasks', data);
    return response.data;
}