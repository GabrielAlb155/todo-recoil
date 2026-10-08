import { TodoForm } from './components/TodoForm';
import { TodoFilter } from './components/TodoFilter';
import { TodoList } from './components/TodoList';

export function App() {
  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}