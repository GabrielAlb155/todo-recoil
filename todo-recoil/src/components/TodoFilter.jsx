import { useTodos } from '../context/TodoContext';

export default function TodoFilter() {
  const { filter, setFilter, search, setSearch } = useTodos();

  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50 p-4 rounded-lg">
      <div className="w-full sm:w-1/2">
        <input
          type="text"
          placeholder="Pesquisar tarefas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-2 w-full sm:w-auto justify-center">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 text-sm rounded ${
            filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-3 py-1 text-sm rounded ${
            filter === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Pendentes
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 text-sm rounded ${
            filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Concluídas
        </button>
      </div>
    </div>
  );
}