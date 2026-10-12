import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 my-8">
        Nenhuma tarefa encontrada.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}