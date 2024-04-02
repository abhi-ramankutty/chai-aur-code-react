import React, {useEffect, useState} from 'react';
import appwriteService from '../appwrite/appwrite.service';
import {Container, PostCard} from '../components';

function HomePage() {
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        appwriteService.getAllPosts([]).then((posts) => {
            if (posts) {
                setAllPosts(posts.documents);
            }
        });
    }, []);

    if (!allPosts.length) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    } else {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {allPosts.map((post) => {
                            return (
                                <div
                                    key={post.$id}
                                    className='p-2 w-1/4'
                                >
                                    <PostCard {...post} />
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </div>
        );
    }
}

export default HomePage;
