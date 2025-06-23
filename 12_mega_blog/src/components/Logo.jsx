function Logo({ width = '100px', className = '' }) {
	return (
		<img
			src='https://logos-world.net/wp-content/uploads/2020/06/Assassins-Creed-Logo.png'
			alt='Logo'
			className={className}
			style={{ width }}
		/>
	);
}

export default Logo;
