import { memo } from 'react';
import { useTodos } from '../context/TodoContext';

const TodoItem = memo(function TodoItem({ todo }) {
  const { completeTodo, removeTodo } = useTodos();

  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow transition-shadow">
      <div className="flex items-center gap-3 flex-1 mr-2">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => completeTodo(todo.id)}
          className="w-5 h-5 cursor-pointer accent-blue-600"
        />
        <span
          className={`text-gray-800 break-all ${
            todo.isCompleted ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.text}
        </span>
        <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full border border-blue-100">
          {todo.category}
        </span>
      </div>

      <button
        onClick={() => removeTodo(todo.id)}
        className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
      >
        Excluir
      </button>
    </div>
  );
});

export default TodoItem;