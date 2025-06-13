import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleIsChecked, updateTodo } from '../features/todo/todoSlice';

function TodoItem({ todo }) {
	const [isTodoEditable, setIsTodoEditable] = useState(false);
	const [todoMsg, setTodoMsg] = useState(todo.todoMsg);
	const dispatch = useDispatch();

	const toggleCompleted = () => {
        dispatch(toggleIsChecked(todo.id))
    };

	const editTodo = () => {
		dispatch(updateTodo({ id: todo.id, todoMsg }));
        setIsTodoEditable(false)
	};
	const deleteTodoHandler = (id) => {
		console.log(id);
		dispatch(deleteTodo(id));
	};

	return (
		<div
			className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
				todo.isChecked ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
			}`}>
			<input
				type='checkbox'
				className='cursor-pointer'
				checked={todo.isChecked}
				onChange={toggleCompleted}
			/>
			<input
				type='text'
				className={`border outline-none w-full bg-transparent rounded-lg ${
					isTodoEditable
						? 'border-black/10 px-2'
						: 'border-transparent'
				} ${todo.isChecked ? 'line-through' : ''}`}
				value={todoMsg}
				onChange={(e) => setTodoMsg(e.target.value)}
				readOnly={!isTodoEditable}
			/>
			{/* Edit, Save Button */}
			<button
				className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer'
				onClick={() => {
					if (todo.isChecked) return;

					if (isTodoEditable) {
						editTodo();
					} else setIsTodoEditable((prev) => !prev);
				}}
				disabled={todo.isChecked}>
				{isTodoEditable ? '📁' : '✏️'}
			</button>
			{/* Delete Todo Button */}
			<button
				className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer'
				onClick={() => deleteTodoHandler(todo.id)}>
				❌
			</button>
		</div>
	);
}

export default TodoItem;
