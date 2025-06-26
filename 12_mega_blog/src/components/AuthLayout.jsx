import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function AuthLayout({ children, authorization = true }) {
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const authStatus = useSelector((store) => store.auth.status);

	useEffect(() => {
		if (authorization && authStatus !== authorization) {
			navigate('/login');
		} else if (!authorization && authStatus !== authorization) {
			navigate('/');
		}
        setIsLoading(false)
	}, [authorization, authStatus, navigate]);

	return isLoading ? <div>Loading...</div> : <>{ children }</>;
}

export default AuthLayout;
