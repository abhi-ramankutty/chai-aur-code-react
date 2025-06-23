function Button({
	children,
	bgColor = 'bg-blue-600',
	textColor = 'text-white',
	className = '',
	...props
}) {
	return (
		<button
			className={`px-4 py-2 rounded-lg font-semibold cursor-pointer hover:opacity-70 ${bgColor} ${textColor} ${className}`}
			{...props}>
			{children}
		</button>
	);
}

export default Button;
