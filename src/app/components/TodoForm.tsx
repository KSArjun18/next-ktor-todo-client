import React, { useState, useEffect } from 'react';
import { Todo, TodoFormProps } from './types/todo';

const TodoForm: React.FC<TodoFormProps> = ({
    onTodoAdded,
    onTodoUpdated,
    editingTodo,
    setEditingTodo,
}) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (editingTodo) {
            setTitle(editingTodo.title);
        }
    }, [editingTodo]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingTodo) {
            onTodoUpdated({ ...editingTodo, title });
        } else {
            const newTodo: Todo = { id: Date.now(), title, isCompleted: false };
            onTodoAdded(newTodo);
        }

        setTitle(''); 
        setEditingTodo(null); 
    };

    const handleCancel = () => {
        setEditingTodo(null);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 mr-2"
                placeholder="Enter todo title"
                required
            />
            <button type="submit" className="bg-green-500 text-white p-2">
                {editingTodo ? 'Update Todo' : 'Add Todo'}
            </button>
            {editingTodo && (
                <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-500 text-white p-2 ml-2"
                >
                    Cancel
                </button>
            )}
        </form>
    );
};

export default TodoForm;
