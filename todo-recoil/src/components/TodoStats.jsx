

import { useTodos } from '../context/TodoContext';

export default function TodoStats() {
  const { stats } = useTodos();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center text-sm font-semibold">
      <div className="bg-blue-50 text-blue-700 p-3 rounded-lg border border-blue-100">
        <span className="block text-xs text-blue-500 uppercase tracking-wider">Total</span>
        <span className="text-xl font-bold">{stats.total}</span>
      </div>
      <div className="bg-green-50 text-green-700 p-3 rounded-lg border border-green-100">
        <span className="block text-xs text-green-500 uppercase tracking-wider">Concluídas</span>
        <span className="text-xl font-bold">{stats.completed}</span>
      </div>
      <div className="bg-yellow-50 text-yellow-700 p-3 rounded-lg border border-yellow-100">
        <span className="block text-xs text-yellow-500 uppercase tracking-wider">Pendentes</span>
        <span className="text-xl font-bold">{stats.pending}</span>
      </div>
      <div className="bg-purple-50 text-purple-700 p-3 rounded-lg border border-purple-100">
        <span className="block text-xs text-purple-500 uppercase tracking-wider">Progresso</span>
        <span className="text-xl font-bold">{stats.percent}%</span>
      </div>
    </div>
  );
}