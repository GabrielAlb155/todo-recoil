# 📝 To-Do List com React e Recoil

Aplicação de gerenciamento de tarefas desenvolvida para praticar o gerenciamento de estado global no React utilizando o **Recoil**.

---

## 🚀 Tecnologias Utilizadas

- **[React 18](https://react.dev/)** - Biblioteca para construção de interfaces web.
- **[Recoil](https://recoiljs.org/)** - Biblioteca de gerenciamento de estado global da Meta.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build rápida para desenvolvimento web.
- **CSS3** - Estilização moderna e responsiva sem frameworks externos.

---

## 🎯 Funcionalidades

- ➕ **Adicionar Tarefa:** Adiciona novas tarefas à lista.
- ✅ **Concluir Tarefa:** Marcar/desmarcar tarefas como concluídas.
- 🗑️ **Remover Tarefa:** Excluir tarefas da lista.
- 🔍 **Filtrar Tarefas:** Filtrar exibições por **Todas**, **Pendentes** e **Concluídas** usando *Selectors* do Recoil.

---

## 🧠 Arquitetura do Recoil

O projeto utiliza os dois conceitos fundamentais do Recoil:

- **Atoms (`src/atoms/`):**
  - `todoAtom.js`: Armazena o estado do array principal de tarefas.
  - `filterAtom.js`: Armazena o estado do filtro atual selecionado (`todas`, `pendentes` ou `concluidas`).

- **Selectors (`src/selectors/`):**
  - `filteredTodoListState.js`: Computa e retorna a lista de tarefas filtrada dinamicamente com base nos valores dos dois átomos acima.

---

## 📂 Estrutura de Pastas

```text
src/
├── atoms/
│   ├── filterAtom.js
│   └── todoAtom.js
├── selectors/
│   └── filteredTodoListState.js
├── components/
│   ├── TodoFilter.jsx
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── App.jsx
├── main.jsx
└── index.css
