import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoStateType = {
  todos: Todo[];
};

const initialState: TodoStateType = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    loadTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [action.payload, ...state.todos];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
  },
});

export const { loadTodos, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
