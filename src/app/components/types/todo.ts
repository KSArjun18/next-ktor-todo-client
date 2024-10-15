export interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface TodoFormProps {
    onTodoAdded: (newTodo: Todo) => void;
    onTodoUpdated: (updatedTodo: Todo) => void;
    editingTodo?: Todo;
    setEditingTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
}
