import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
}
export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			console.log(action);
			state.todoList.push({
				id: nanoid(),
				todoMsg: action.payload,
				isChecked: false,
			});
		},
		updateTodo: (state, action) => {
            state.todoList = state.todoList.map((todoItem) => todoItem.id === action.payload.id ? {...todoItem, todoMsg: action.payload.todoMsg} : todoItem)
        },
		deleteTodo: (state, action) => {
			state.todoList = state.todoList.filter((todoItem) => todoItem.id !== action.payload);
		},
        toggleIsChecked: (state, action) => {
            state.todoList = state.todoList.map((todoItem) => todoItem.id === action.payload ? {...todoItem, isChecked: !todoItem.isChecked} : todoItem)
        }
	},
});

export const { addTodo, deleteTodo, updateTodo, toggleIsChecked } = todoSlice.actions;

export default todoSlice.reducer;
