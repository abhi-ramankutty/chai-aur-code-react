import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { TodoForm, TodoItem } from './components';
import { useSelector } from 'react-redux';

function App() {
	const [count, setCount] = useState(0);
	const todosList = useSelector((state) => state.todoList) || [];

	return (
		<div className='bg-[#172842] min-h-screen py-8'>
			<div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
				<h1 className='text-2xl font-bold text-center mb-8 mt-2'>
					Manage Your Todos With Redux
				</h1>
				<div className='mb-4'>
					{/* Todo form goes here */}
					<TodoForm />
				</div>
				<div className='flex flex-wrap gap-y-3'>
					{/*Loop and Add TodoItem here */}
					{todosList.map((todoListItem) => (
							<div
								key={todoListItem.id}
								className='w-full'>
								<TodoItem todo={todoListItem} />
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default App;
