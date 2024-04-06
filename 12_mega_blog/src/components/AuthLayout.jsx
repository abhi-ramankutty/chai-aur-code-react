import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function AuthLayout({children, authentication = true}) {
    const navigate = useNavigate();
    const [loding, setLoading] = useState(true);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    useEffect(() => {
        /** TODO: Make it more simple... */
        // if (isLoggedIn === true) {
        //     navigate('/');
        // } else if (isLoggedIn === false) {
        //     navigate('/login');
        // }

        if (authentication && isLoggedIn !== authentication) {
            navigate('/login');
        } else if (!authentication && isLoggedIn !== authentication) {
            navigate('/');
        }
        setLoading(false);
    }, [isLoggedIn, navigate, authentication]);

    return loding ? <h1>Loading...</h1> : <>{children}</>
}
