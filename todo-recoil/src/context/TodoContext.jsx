/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  // Persistência no localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Ações de manipulação memoizadas com useCallback
  const addTodo = useCallback((text, category) => {
    const newTodo = {
      id: Date.now(),
      text,
      category: category || 'Geral',
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const completeTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);

  const editTodo = useCallback((id, newText, newCategory) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText, category: newCategory } : todo
      )
    );
  }, []);

  // Lista filtrada memoizada com useMemo
  const todosFiltrados = useMemo(() => {
    return todos.filter((todo) => {
      const matchesFilter =
        filter === 'all'
          ? true
          : filter === 'completed'
          ? todo.isCompleted
          : !todo.isCompleted;

      const matchesSearch = todo.text
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [todos, filter, search]);

  // Estatísticas calculadas de forma otimizada com useMemo
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((t) => t.isCompleted).length;
    const pending = total - completed;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, pending, percent };
  }, [todos]);

  // Objeto de contexto memoizado
  const value = useMemo(
    () => ({
      todos: todosFiltrados,
      allTodos: todos,
      filter,
      setFilter,
      search,
      setSearch,
      addTodo,
      removeTodo,
      completeTodo,
      editTodo,
      stats,
    }),
    [todosFiltrados, todos, filter, search, addTodo, removeTodo, completeTodo, editTodo, stats]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// Hook personalizado com validação do contexto
export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos deve ser usado dentro de um TodoProvider');
  }
  return context;
}