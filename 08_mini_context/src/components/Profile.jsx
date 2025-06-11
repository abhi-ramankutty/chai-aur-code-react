import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
	const { user } = useContext(UserContext);

	if (user) {
		return <div>Welcome {user.userName}</div>;
	} else {
		return <div>Please Login</div>;
	}
}

export default Profile;
