import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../atoms/filterAtom';

export function TodoFilter() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <div className="todo-filter">
      <button
        className={filter === 'todas' ? 'active' : ''}
        onClick={() => setFilter('todas')}
      >
        Todas
      </button>
      <button
        className={filter === 'pendentes' ? 'active' : ''}
        onClick={() => setFilter('pendentes')}
      >
        Pendentes
      </button>
      <button
        className={filter === 'concluidas' ? 'active' : ''}
        onClick={() => setFilter('concluidas')}
      >
        Concluídas
      </button>
    </div>
  );
}