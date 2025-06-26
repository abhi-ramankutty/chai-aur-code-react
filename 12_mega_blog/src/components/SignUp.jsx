import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { Input, Button, Logo } from './';
import { login } from '../store/auth-slice';

import authService from '../appwrite/auth';

function SignUp() {
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();

	const onSignUp = async (data) => {
        setError('')
		try {
            const userAcc = await authService.createAccount({ data });
		if (userAcc) {
			const userData = await authService.getCurrentUser();
			if (userData) {
				dispatch(login(userData));
				navigate('/');
			}
		}
        } catch (error) {
            console.error(`SignUp :: onSignUp :: Error :: `, error);
            setError(error.message)
        }
	};
	return (
		<div className='w-full p-4'>
			<div className='max-w-md w-full bg-gray-700 rounded-lg flex flex-col justify-center items-center justify-self-center p-4 text-white text-center'>
				<Logo />
				<h2 className='text-2xl font-bold leading-tight'>
					Sign in to your account
				</h2>
				<p className='mt-2 text-base text-black/60'>
					<span className='mr-1'>Don't have any account?</span>
					<Link
						to='/signup'
						className='font-medium text-primary transition-all duration-200 hover:underline'>
						Sign Up
					</Link>
				</p>
				{error && <p className='text-red-500'>{error}</p>}
				<form
					className='w-10/12 flex flex-col gap-2'
					onSubmit={handleSubmit(onSignUp)}>
					<Input
						type='text'
						label='Name'
						placeholder='Enter your name'
						{...register('name', { required: true })}
					/>
					<Input
						type='email'
						label='Email'
						placeholder='Enter your email'
						{...register('email', { required: true })}
					/>
					<Input
						type='password'
						label='Password'
						placeholder='Enter your password'
						{...register('password', { required: true })}
					/>
					<Button type='submit'>Create Account</Button>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
