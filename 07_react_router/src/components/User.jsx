import { useParams, useSearchParams } from 'react-router';

export default function User() {
	const { id } = useParams();
	const [param, setParams] = useSearchParams();
	console.log(param.getAll('tabs'));

	const updateSearchParams = () => {
		setParams({tabs: ['a', 'b'] });
	};
	return (
		<>
			<div>User Component</div>
			<div>{`User id: ${id}`}</div>
			<button onClick={updateSearchParams}>add Param</button>
		</>
	);
}
