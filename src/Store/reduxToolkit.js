import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "myTasks",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state = [...state, { id: Math.random(), name: action.payload, complete: false }]
            return state
        },
        removeTodos: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        completeTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        complete: true,
                    };
                }
                return todo;
            });
        },
    },
});

export const {
    addTodos,
    removeTodos,
    completeTodos,
} = addTodoReducer.actions;
export default addTodoReducer.reducer;
