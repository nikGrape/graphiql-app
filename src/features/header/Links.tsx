import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { selectApp, logout } from '../app/appSlice';

export const Links = () => {
	const { isAuthenicated, language } = useSelector(selectApp);
	const msg = <p>{language == 'en' ? 'GO TO' : 'ПЕРЕЙТИ'}:</p>;
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleLogOut = () => {
		(() => {
			let confirm = window.confirm('Are you shure?');
			if (confirm) {
				dispatch(logout());
				navigate('/welcome');
			}
		})();
	};

	return (
		<div id='links'>
			{msg}
			{isAuthenicated ? (
				<>
					{pathname != '/main' && (
						<Link to='/main'>{language == 'en' ? 'Main' : 'Главная'}</Link>
					)}
					{isAuthenicated && (
						<button onClick={handleLogOut}>
							{language == 'en' ? 'Log Out' : 'Выйти'}
						</button>
					)}
				</>
			) : (
				<>
					{pathname != '/login' && (
						<Link to='/login'>{language == 'en' ? 'Sign In' : 'Войти'}</Link>
					)}
					{pathname != '/signup' && (
						<Link to='/signup'>
							{language == 'en' ? 'Sign Up' : 'Регистрация'}
						</Link>
					)}
				</>
			)}
		</div>
	);
};
