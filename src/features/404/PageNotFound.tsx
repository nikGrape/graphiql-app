import { useDispatch, useSelector } from 'react-redux';
import { selectApp, setShowHeader } from '../app/appSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const PageNotFound = () => {
	const { isAuthenicated } = useSelector(selectApp);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setShowHeader(false));
		return () => {
			dispatch(setShowHeader(true));
		};
	}, [dispatch]);

	return (
		<div>
			<p>Page Not Found</p>
			{'Go to: '}
			{isAuthenicated ? (
				<Link to='/main'>Main</Link>
			) : (
				<Link to='/login'>Login</Link>
			)}
		</div>
	);
};
