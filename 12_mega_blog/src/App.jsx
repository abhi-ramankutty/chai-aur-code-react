import './App.css';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth.service';
import {useEffect} from 'react';
import {login, logout} from './store/auth.slice';
import {Footer, Header} from './components/index';
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((user) => {
                if (user) {
                    dispatch(login({userData: user}));
                } else {
                    dispatch(logout());
                }
            })
            .catch((err) => {
                dispatch(logout());
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [isLoading]);
    authService;

    if (isLoading) {
        return <h1>Loading</h1>;
    } else {
        return (
            <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
                <div className='w-full block'>
                    <Header />
                    TODO
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
