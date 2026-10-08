import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtom';

export function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleComplete = () => {
    const updated = todoList.map((todo) =>
      todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodoList(updated);
  };

  const deleteItem = () => {
    const updated = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(updated);
  };

  return (
    <li className={`todo-item ${item.isComplete ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleComplete}
        />
        <span>{item.text}</span>
      </div>
      <button onClick={deleteItem} className="delete-btn">
        Remover
      </button>
    </li>
  );
}