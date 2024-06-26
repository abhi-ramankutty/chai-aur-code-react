import React from 'react';
import {Container, Logo, LogoutBtn} from '../index';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Header() {
    const isLoggedIn = useSelector((state) => {
        return state.isLoggedIn;
    });
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
            active: !isLoggedIn,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !isLoggedIn,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: isLoggedIn,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: isLoggedIn,
        },
    ];
    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full text-nowrap'
                                    onClick={() => navigate(item.slug)}>
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {isLoggedIn && (
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
