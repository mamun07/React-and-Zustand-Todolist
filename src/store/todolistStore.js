import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const todolistStore = (set) => ({
  todolists: [],
  addTodolist: (todolist) => {
    set((state) => ({
      todolists: [todolist, ...state.todolists],
    }));
  },
  editTodolist: (todolistId) => {
    set((state) => ({
      todolists: state.todolists.filter((todo) => todo.id !== todolistId),
    }));
  },
  removeTodolist: (todolistId) => {
    set((state) => ({
      todolists: state.todolists.filter((todo) => todo.id !== todolistId),
    }));
  },
  toggleTodolistStatus: (todolistId) => {
    set((state) => ({
      todolists: state.todolists.map((todolist) =>
        todolist.id === todolistId
          ? { ...todolist, completed: !todolist.completed }
          : todolist
      ),
    }));
  },
});

const useTodolistStore = create(
  devtools(persist(todolistStore, { name: 'todolists' }))
);

export default useTodolistStore;
