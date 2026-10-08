import { selector } from 'recoil';
import { todoListState } from '../atoms/todoAtom';
import { todoListFilterState } from '../atoms/filterAtom';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'concluidas':
        return list.filter((item) => item.isComplete);
      case 'pendentes':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});