import {Container, PostForm} from '../components';
import appwriteService from '../appwrite/appwrite.service';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function EditPostPage() {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((postData) => {
                setPost(postData);
            });
        } else {
            navigate('/');
        }
    }, [navigate, slug]);

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPostPage;
