import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Hello world',
        },
    ],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todoItem = {
                id: nanoid(),
                text: action.payload.text,
            };
            state.todos.push(todoItem);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todoItem) => todoItem.id !== action.payload.id
            );
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todoItem) => {
                if (todoItem.id === action.payload.id) {
                    return {...todoItem, ...action.payload.text};
                }
                return todoItem;
            });
        },
    },
});

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;