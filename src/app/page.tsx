"use client";
import React, { useEffect, useState } from 'react';
import { fetchTodos, updateTodo, deleteTodo } from '@/utils/api';
import TodoForm from './components/TodoForm';

interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
}

const Home: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

    const fetchData = async () => {
        const data = await fetchTodos();
        setTodos(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleTodoUpdate = async (todo: Todo) => {
        await updateTodo(todo);
        setEditingTodo(null);
        fetchData();
    };

    const handleTodoDelete = async (id: number) => {
        await deleteTodo(id);
        fetchData();
    };

    const handleEditClick = (todo: Todo) => {
        setEditingTodo(todo);
    };

    const handleTodoAdd = (newTodo: Todo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]); 
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">TODO List</h1>
            <TodoForm 
                onTodoAdded={handleTodoAdd}
                editingTodo={editingTodo || undefined} 
                onTodoUpdated={handleTodoUpdate} 
                setEditingTodo={setEditingTodo} 
            />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between mb-2">
                        <div>
                            <input
                                type="checkbox"
                                checked={todo.isCompleted}
                                onChange={() => 
                                    handleTodoUpdate({ ...todo, isCompleted: !todo.isCompleted })
                                }
                            />
                            <span className={`ml-2 ${todo.isCompleted ? 'line-through' : ''}`}>
                                {todo.title}
                            </span>
                        </div>
                        <div>
                            <button
                                onClick={() => handleEditClick(todo)}
                                className="bg-blue-500 text-white p-1 ml-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleTodoDelete(todo.id)}
                                className="bg-red-500 text-white p-1 ml-2"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
