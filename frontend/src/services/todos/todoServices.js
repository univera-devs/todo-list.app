import { http } from '../httpService';

export async function listTodos() {
    const response = await http.get('/api/tasks');
    return response.data ?? [];
}

export async function createTodo(data) {
    const response = await http.post('/api/tasks', data);
    return response.data;
}

export async function deleteTodo(id) {
    const response = await http.delete(`/api/tasks/${id}`);
    return response.data;
}

export async function updateTodo(id, data) {
    const response = await http.put(`/api/tasks/${id}`, data);
    return response.data;
}

export async function dataTodo(id) {
    if (!id) return;
    const response = await http.get(`/api/tasks/${id}`);
    return response.data;
}

// category
export async function createCategory(data) {
    const response = await http.post(`/api/category`, data);
    return response.data;
}

export async function listCategory() {
    const response = await http.get(`/api/category`);
    return response.data;
}
