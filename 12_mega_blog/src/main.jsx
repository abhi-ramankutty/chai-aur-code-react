import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {Provider} from 'react-redux';
import store from './store/store.js';
import {
    BrowserRouter,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import AllPostsPage from './pages/AllPostsPage.jsx';
import AddPostPage from './pages/AddPostPage.jsx';
import EditPostPage from './pages/EditPostPage.jsx';
import PostPage from './pages/PostPage.jsx';
import {AuthLayout, Login} from './components/index.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/login',
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: '/signup',
                element: (
                    <AuthLayout authentication={false}>
                        <SignUpPage />
                    </AuthLayout>
                ),
            },
            {
                path: '/all-posts',
                element: (
                    <AuthLayout authentication>
                        {' '}
                        <AllPostsPage />
                    </AuthLayout>
                ),
            },
            {
                path: '/add-post',
                element: (
                    <AuthLayout authentication>
                        {' '}
                        <AddPostPage />
                    </AuthLayout>
                ),
            },
            {
                path: '/edit-post/:slug',
                element: (
                    <AuthLayout authentication>
                        {' '}
                        <EditPostPage />
                    </AuthLayout>
                ),
            },
            {
                path: '/post/:slug',
                element: <PostPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
);
