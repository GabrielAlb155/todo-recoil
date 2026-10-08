import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtom';

export function TodoForm() {
  const [text, setText] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setTodoList((oldList) => [
      ...oldList,
      {
        id: Date.now(),
        text,
        isComplete: false,
      },
    ]);
    setText('');
  };

  return (
    <form onSubmit={addItem} className="todo-form">
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}