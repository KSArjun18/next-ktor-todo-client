import React, { useEffect, useState } from 'react';
import { Todo } from './types/todo';

interface TodoFormProps {
    onTodoAdded: () => void;
    editingTodo?: Todo | null; // Prop for editing
    onTodoUpdated: (todo: Todo) => void; // Callback for updating
    setEditingTodo: (todo: Todo | null) => void; // Function to clear editing state
}

const TodoForm: React.FC<TodoFormProps> = ({ onTodoAdded, editingTodo, onTodoUpdated, setEditingTodo }) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (editingTodo) {
            setTitle(editingTodo.title); // Populate the title with the editing todo's title
        }
    }, [editingTodo]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editingTodo) {
            // Update the existing todo
            onTodoUpdated({ ...editingTodo, title });
            setEditingTodo(null); // Clear the editing state after submission
        } else {
            // Add a new todo (Assuming you have the addTodo function)
            const newTodo = { id: Date.now(), title, isCompleted: false }; // Example new todo object
            // Call your addTodo function here
            // await addTodo(newTodo);
            onTodoAdded(); // Refresh the list after adding
        }
        setTitle(""); // Clear input after submission
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 flex-grow"
                placeholder="Enter todo title"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
                {editingTodo ? "Update Todo" : "Add Todo"}
            </button>
        </form>
    );
};

export default TodoForm;
