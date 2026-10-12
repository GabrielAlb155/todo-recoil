import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Trabalho');
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text, category);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2 flex-col sm:flex-row">
      <input
        type="text"
        placeholder="Digite o título da tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      >
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudos">Estudos</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
      >
        Adicionar
      </button>
    </form>
  );
}