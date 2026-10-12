# 📝 Gerenciador de Tarefas (React Avançado)

Uma aplicação funcional e performática de gerenciamento de tarefas (Todo List) desenvolvida com **React**, **Vite** e **Tailwind CSS**, refatorada para utilizar os conceitos avançados de gerenciamento de estado e memoização do React.

---

## 🚀 Recursos e Funcionalidades

- **Gerenciamento de Tarefas:** Adicionar, editar, concluir e excluir tarefas.
- **Filtro e Busca:** Filtrar tarefas por status (_Todas_, _Pendentes_, _Concluídas_) e pesquisar pelo título.
- **Estatísticas em Tempo Real:** Visualização dinâmica do total de tarefas, concluídas, pendentes e porcentagem de progresso.
- **Persistência de Dados:** Armazenamento automático da lista no `localStorage`.
- **Layout Responsivo:** Interface moderna e adaptável utilizando Tailwind CSS.

---

## 🛠️ Conceitos Avançados Aplicados

Nesta etapa do projeto, o código foi refatorado para atender aos critérios de **React Avançado**:

1. **Context API (`TodoContext`):**
   - Centralização do estado global e de todas as funções de manipulação em um único provedor (`TodoProvider`), eliminando o _prop drilling_.
2. **Hook Personalizado (`useTodos`):**
   - Encapsulamento da lógica do contexto com validação de segurança para facilitar o consumo em qualquer componente.
3. **Otimização com `useMemo`:**
   - Computação memoizada para a filtragem da lista (`todosFiltrados`) e cálculo das estatísticas (`stats`), evitando reprocessamentos desnecessários em re-renderizações.
4. **Otimização com `useCallback`:**
   - Funções de manipular o estado (`addTodo`, `removeTodo`, `completeTodo`, `editTodo`) estabilizadas para não recriar referências na memória.
5. **Memoização de Componentes com `memo`:**
   - Componente `TodoItem` envolvido com `memo` para impedir que todos os itens da lista sejam re-renderizados quando apenas um sofrer alteração.

---

## 📁 Estrutura do Projeto

```text
src/
├── components/
│   ├── TodoFilter.jsx
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   ├── TodoList.jsx
│   └── TodoStats.jsx
├── context/
│   └── TodoContext.jsx
├── App.jsx
├── index.css
└── main.jsx
```
