import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../selectors/filteredTodoListState';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  if (todoList.length === 0) {
    return <p className="empty-message">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </ul>
  );
}