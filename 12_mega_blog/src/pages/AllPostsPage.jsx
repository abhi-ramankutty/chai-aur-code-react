import React, {useState} from 'react';
import appwriteService from '../appwrite/appwrite.service';
import {Container, PostCard} from '../components';

function AllPostsPage() {
    const [allPosts, setAllPosts] = useState([]);
    appwriteService.getAllPosts([]).then((posts) => {
        if (posts) {
            setAllPosts(posts.documents);
        }
    });
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
                                <PostCard post={post}/>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default AllPostsPage;
