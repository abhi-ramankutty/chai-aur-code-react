import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

export default function Github() {
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch('https://api.github.com/users/hiteshchoudhary')
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			console.log(res);
	// 			setData(res);
	// 		});
	// }, []);

    const data = useLoaderData()

	return (
		<>
			<div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
				Github followers: {data.followers}
				<img
					src={data.avatar_url}
					alt='Git picture'
					width={300}
				/>
			</div>
		</>
	);
}

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/abhi-ramankutty');
    return response.json();
};
