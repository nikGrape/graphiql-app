import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectApp, logout } from '../app/appSlice';

export const Links = () => {
	const { isAuthenicated, language } = useSelector(selectApp);
	const msg = <p>{language == 'en' ? 'GO TO' : 'ПЕРЕЙТИ'}:</p>;
	const dispatch = useDispatch();

	const handleLogOut = () => {
		(() => {
			let confirm = window.confirm('Are you shure?');
			if (confirm) dispatch(logout());
		})();
	};

	return (
		<div id='links'>
			{msg}
			{isAuthenicated ? (
				<>
					<Link to='/main'>{language == 'en' ? 'Main' : 'Главная'}</Link>
					<Link to='/welcome' onClick={handleLogOut}>
						{language == 'en' ? 'Log Out' : 'Выйти'}
					</Link>
				</>
			) : (
				<>
					<Link to='/login'>{language == 'en' ? 'Sign In' : 'Войти'}</Link>
					<Link to='/signup'>
						{language == 'en' ? 'Sign Up' : 'Регистрация'}
					</Link>
				</>
			)}
		</div>
	);
};
