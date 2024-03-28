import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos: [{id: 1, todoMsg: 'Todo Msg', isCompleted: false}],
    addItem: (todo) => {},
    updateItem: (id, todo) => {},
    deleteItem: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

/**
 * Everytime you export a function and return a useContext(contextObj),
 * you need to pass a context (i.e. createContext obj)
 */
