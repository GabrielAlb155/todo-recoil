import { atom } from 'recoil';

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'todas', // 'todas' | 'concluidas' | 'pendentes'
});