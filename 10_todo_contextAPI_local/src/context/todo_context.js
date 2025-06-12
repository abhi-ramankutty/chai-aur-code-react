import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todoList: [
        {
            id: 1,
            todoMsg: 'todo msg',
            isChecked: false
        }
    ],
    addTodo: (todoMsg) => {},
    updateTodo: (id, todoMsg) => {},
    deleteTodo: (id) => {},
    toggleIsChecked: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;
