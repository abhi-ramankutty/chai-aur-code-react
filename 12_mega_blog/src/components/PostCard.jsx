import { Link } from 'react-router';
import fileService from '../appwrite/file-service';
import { useState } from 'react';

function PostCard({ $id, title, featuredImage }) {
	const [imagePreviewSrc, setImagePreviewSrc] = useState('');
	fileService.getFilePreview(featuredImage).then((imageSrc) => {
		setImagePreviewSrc(imageSrc);
	});
    
    // (async () => {
    //     const abc = await fileService.getFilePreview(featuredImage)
    // })()
	return (
		<Link
			to={`/post/${$id}`}
			className=''>
			<div className='w-full bg-gray-100 rounded-xl p-4'>
				<div className='w-full justify-center mb-4'>
					<img
						src={imagePreviewSrc}
						alt='Preview'
						className='rounded-xl'
					/>
				</div>
				<h2 className='text-xl font-bold'>{title}</h2>
			</div>
		</Link>
	);
}
export default PostCard;
