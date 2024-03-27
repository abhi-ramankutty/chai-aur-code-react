import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    redirect,
} from 'react-router-dom';
import Layout from './Layout.jsx';

import { Home, About, Contact, User, Github } from './components/index.js';
import { gitHubInfoLoader } from './components/Github/Github.jsx';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout />,
//         children: [
//             {
//                 path: '',
//                 element: <Home />,
//             },
//             {
//                 path: 'about',
//                 element: <About />,
//             },
//             {
//                 path: 'contact',
//                 element: <Contact />,
//             },
//             {
//                 path: 'user/:id',
//                 element: <User />,
//             },
//             {
//                 path: 'github',
//                 element: <Github />,
//                 loader: gitHubInfoLoader
//                 // loader: async () => {
//                 //     const data = await gitHubInfoLoader();
//                 //     if (data) {
//                 //         throw redirect('/user/12');
//                 //     } else {
//                 //         return data;
//                 //     }
//                 // },
//             },
//         ],
//     },
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            element={<Layout />}>
            <Route
                path=''
                element={<Home />}
            />
            <Route
                path='contact'
                element={<Contact />}
            />
            <Route
                path='about'
                element={<About />}
            />
            <Route
                path='user'
                element={<User />}>
                <Route
                    path=':id'
                    element={<User />}
                />
            </Route>
            <Route
                /**
                 * ```
                 * loader={async () => {
                 *  const data = await gitHubInfoLoader();
                 *  if (!data) {
                 *      throw redirect('/user/123')
                 *  } else {
                 *      return data
                 *  }
                 * }}
                 * ```
                 */
                loader={gitHubInfoLoader}
                path='github'
                element={<Github />}
            />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
