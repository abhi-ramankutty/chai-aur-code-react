import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             console.log(data)
    //             setData(data);
    //         });
    // }, []);

    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-gray-600 text-white'>
            Github followers: {data.followers}
            <img src={data.avatar_url} />
        </div>
    );
}

export default Github;
export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json()
};
