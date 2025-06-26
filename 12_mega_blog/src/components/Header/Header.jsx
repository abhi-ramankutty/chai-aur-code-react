import { useNavigate } from 'react-router';
import { Button, Container, Logo, LogoutBtn } from '../';
import { useSelector } from 'react-redux';
function Header() {
	const authStatus = useSelector((state) => state.auth.status);
	const navigate = useNavigate();

	const navItems = [
		{
			name: 'Home',
			slug: '/',
			active: true,
		},
		{
			name: 'Login',
			slug: '/login',
			active: !authStatus,
		},
		{
			name: 'Signup',
			slug: '/signup',
			active: !authStatus,
		},
		{
			name: 'All Posts',
			slug: '/all-posts',
			active: authStatus,
		},
		{
			name: 'Add Post',
			slug: '/add-post',
			active: authStatus,
		},
	];

	return (
		<header className='border-b-1 border-black'>
			<Container>
				<nav className='flex'>
					<div className='flex items-center mr-4'>
						<Logo width='50px' className='cursor-pointer'/>
					</div>
					<ul className='flex ml-auto'>
						{navItems.map((navItem) =>
							navItem.active ? (
								<li key={navItem.name}>
									<Button
										onClick={() => navigate(navItem.slug)}
										bgColor='unset'>
										{navItem.name}
									</Button>
								</li>
							) : null
						)}
						{authStatus && (
							<li>
								<LogoutBtn />
							</li>
						)}
					</ul>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
