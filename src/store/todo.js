import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

const store = create(persist((set) => ({
  todoList: [],
  addTodo: (todo) => set((state) => ({ todoList: [todo, ...state.todoList] }))
}),{
  name: 'store-todo',
  storage: createJSONStorage(() => localStorage)
}));

export default store;