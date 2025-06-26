import { useId } from 'react';

function Input({
	type = 'text',
	label = '',
	placeholder = '',
	className = '',
	ref,
	...props
}) {
	const id = useId();
	return (
		<div className='w-full flex flex-col items-start'>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				ref={ref}
				className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
				{...props}
			/>
		</div>
	);
}

export default Input;
