import axios from 'axios';

const API_URL = 'http://localhost:8080/todos'; // Replace with your backend URL if needed

export const fetchTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTodo = async (todo: { title: string; isCompleted: boolean }) => {
    const response = await axios.post(API_URL, todo);
    return response.data;
};

export const updateTodo = async (todo: { id: number; title: string; isCompleted: boolean }) => {
    const response = await axios.put(`${API_URL}/${todo.id}`, todo);
    return response.data;
};

export const deleteTodo = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};
    