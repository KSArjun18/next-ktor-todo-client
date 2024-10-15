import axios from 'axios';

const BASE_URL = 'http://localhost:8080/todos'; 

export const fetchTodos = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const updateTodo = async (todo: { id: number; title: string; isCompleted: boolean }) => {
    await axios.put(`${BASE_URL}/${todo.id}`, todo);
};

export const deleteTodo = async (id: number) => {
    await axios.delete(`${BASE_URL}/${id}`);
};
