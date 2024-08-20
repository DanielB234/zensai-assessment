import { Todo } from "../TodoTypes"


export interface TodoListProps {
    todos: Todo[]
}

export function TodoList(props: TodoListProps) {
    const{ todos } = props
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <p>Name: {todo.name}</p>
                    <p>Description: {todo.description}</p>
                    <p>State: {todo.state}</p>
                </li>
            ))}
        </ul>
    )
}