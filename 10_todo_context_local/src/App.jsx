import {useState, useEffect} from 'react';
import {TodoProvider, useTodo} from './context';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
    const [todos, setTodos] = useState([]);
    const addItem = (todo) => {
        setTodos((prevTodos) => [...prevTodos, {id: Date.now(), ...todo}]);
    };
    const updateItem = (id, todo) => {
        console.log(id, todo);
        setTodos((prevTodos) => {
            return prevTodos.map((todoItem) => {
                return todoItem.id === id ? {...todoItem, ...todo} : todoItem;
            });
        });
    };
    const deleteItem = (id) => {
        setTodos((prevTodos) => {
            const todoList = prevTodos.filter((todoItem) => todoItem.id !== id);
            return todoList;
        });
    };
    const toggleComplete = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todoItem) =>
                todoItem.id === id ? {...todoItem, isCompleted: !todoItem.isCompleted} : todoItem
            );
        });
    };

    useEffect(() => {
        const todoList = localStorage.getItem('todo_list');
        if (todoList && JSON.parse(todoList).length) {
            setTodos(JSON.parse(todoList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todo_list', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider
            value={{todos, addItem, updateItem, deleteItem, toggleComplete}}
        >
            <div className='bg-[#172842] min-h-screen py-8'>
                <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
                    <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
                        Manage Your Todos
                    </h1>
                    <div className='mb-4'>
                        <TodoForm />
                    </div>
                    <div className='flex flex-wrap gap-y-3'>
                        {todos.map((todoItem) => (
                            <div
                                className='w-full'
                                key={todoItem.id}
                            >
                                <TodoItem todo={todoItem} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
