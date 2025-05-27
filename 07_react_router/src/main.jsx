import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { About, Contact, Home, Layout, Github, User } from './components';
import { githubInfo } from './components/Github.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				path: '',
				Component: Home,
			},
			{
				path: 'about',
				Component: About,
			},
			{
				path: 'contact-us',
				Component: Contact,
			},
			{
				path: 'github',
				Component: Github,
				loader: async () => {
					const response = await fetch(
						'https://api.github.com/users/hiteshchoudhary'
					);
					return response.json();
				},
			},
            {
                path: 'user/:id',
                Component: User
            }
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
