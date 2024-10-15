export interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface TodoFormProps {
    onTodoAdded: () => void;
    onTodoUpdated: (todo: Todo) => void;
    editingTodo?: Todo;
    setEditingTodo: (todo: Todo | null) => void;
}