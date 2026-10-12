import { useContext } from 'react';
import { TodoContext } from './TodoContext';

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos deve ser usado dentro de um TodoProvider');
  }
  return context;
}