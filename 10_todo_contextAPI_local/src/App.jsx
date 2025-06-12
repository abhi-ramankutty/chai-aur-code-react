import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider } from './context';
import { TodoForm, TodoItem } from './components';

function App() {
	const [todoList, setTodoList] = useState([]);

	const addTodo = (todoMsg) => {
		setTodoList((prev) => [
			{
				id: Date.now(),
				todoMsg,
				isChecked: false,
			},
			...prev,
		]);
	};
	const updateTodo = (id, todoMsg) => {
		setTodoList((prev) =>
			prev.map((prevTodoItem) =>
				prevTodoItem.id === id
					? { ...prevTodoItem, todoMsg }
					: prevTodoItem
			)
		);
	};

	const deleteTodo = (id) => {
		setTodoList((prev) =>
			prev.filter((prevTodoItem) => prevTodoItem.id !== id)
		);
	};
	const toggleIsChecked = (id) => {
		setTodoList((prev) =>
			prev.map((prevTodoItem) => {
				if (prevTodoItem.id === id) {
					return {
						...prevTodoItem,
						isChecked: !prevTodoItem.isChecked,
					};
				} else {
					return prevTodoItem;
				}
			})
		);
	};

	useEffect(() => {
		const todoList = JSON.parse(localStorage.getItem('chai_todoList'));

		if (todoList && todoList.length > 0) {
			setTodoList(todoList);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('chai_todoList', JSON.stringify(todoList));
	}, [todoList]);

	return (
		<TodoProvider
			value={{
				todoList,
				addTodo,
				updateTodo,
				deleteTodo,
				toggleIsChecked,
			}}>
			<div className='bg-[#172842] min-h-screen py-8'>
				<div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
					<h1 className='text-2xl font-bold text-center mb-8 mt-2'>
						Manage Your Todos
					</h1>
					<div className='mb-4'>
						<TodoForm />
					</div>
					<div className='flex flex-wrap gap-y-3 w-full'>
						{todoList.map((todoListItem) => (
							<div key={todoListItem.id}
                          className='w-full'
                          >
                            <TodoItem todo={todoListItem} />
                          </div>
						))}
					</div>
				</div>
			</div>
		</TodoProvider>
	);
}

export default App;
