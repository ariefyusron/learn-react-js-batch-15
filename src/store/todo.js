import { create } from 'zustand';

const store = create((set) => ({
  todoList: [],
  addTodo: (todo) => set((state) => ({ todoList: [todo, ...state.todoList] }))
}));

export default store;