import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import authService from './appwrite/auth';
import './App.css';
import { login, logout } from './store/auth-slice';
import { Footer, Header, SignUp, AuthLayout } from './components';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		authService
			.getCurrentUser()
			.then((userData) => {
				dispatch(login({ userData }));
			})
			.catch(() => {
				dispatch(logout());
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return !isLoading ? (
		<div className=''>
			<div className=''>
				<Header />
                <AuthLayout/>
				<Footer />
			</div>
		</div>
	) : (
		<div>Loading...</div>
	);
}

export default App;
