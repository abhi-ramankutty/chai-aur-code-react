import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, triggerEdit, updateTodo} from '../features/todo/todoSlice';
import {useEffect} from 'react';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const todoEditMode = useSelector((state) => state.editMode);

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo({text: input}));
        setInput('');
    };

    const editTodoHandler = (e) => {
        e.preventDefault();
        dispatch(updateTodo({id: todoEditMode.id, text: input}));
        setInput('');
        dispatch(triggerEdit(null));
    };

    useEffect(() => {
        if (todoEditMode) {
            setInput(todoEditMode.text);
        }
    }, [todoEditMode]);

    return (
        <form
            onSubmit={todoEditMode ? editTodoHandler : addTodoHandler}
            className='space-x-3 mt-12'
        >
            <input
                type='text'
                className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                placeholder='Enter a Todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type='submit'
                className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
                {todoEditMode ? 'Update' : 'Add Todo'}
            </button>
        </form>
    );
}

export default AddTodo;
