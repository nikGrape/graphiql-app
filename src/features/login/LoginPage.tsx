import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { login, selectApp } from '../app/appSlice';
import { AppThunkDispatch } from '../../store';
import {
	auth,
	logInWithEmailAndPassword,
	signInWithGoogle,
} from '../../firebase';
import './_sign.scss';
import { setTokenExparationTime } from '../app/setTokenExparationTime';

interface Input {
	email: string;
	password: string;
}

export const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Input>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

	const dispatch = useDispatch<AppThunkDispatch>();

	const { isAuthenicated } = useSelector(selectApp);
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenicated) {
			navigate('/main');
		}
	}, [navigate, isAuthenicated]);

	const [user, loading, error] = useAuthState(auth);

	useEffect(() => {
		if (loading) {
			return;
		}
		if (user) {
			(async (user) => {
				const token = await user.getIdToken();
				token;
			})(user);
			dispatch(login(user));
			dispatch(setTokenExparationTime(user));
			navigate('/main');
		}
		if (error) {
			console.log('error on login page!', error);
		}
	}, [loading, user, error, dispatch, navigate]);

	const onSubmit: SubmitHandler<Input> = (data) => {
		console.log('', data);
		logInWithEmailAndPassword(data.email, data.password);
	};

	return (
		<div className='login-page'>
			<h2>Login</h2>

			<form action='' onSubmit={handleSubmit(onSubmit)} className='signForm'>
				<input
					type='email'
					placeholder='e-mail'
					{...register('email', {
						required: 'E-Mail is Required',
					})}
				/>
				{errors.email && <p className='error'>{errors.email.message}</p>}
				<br />
				<input
					type='password'
					placeholder='password'
					autoComplete=''
					{...register('password', {
						required: 'Password is Required',
						minLength: { value: 8, message: 'minimum length is 8' },
					})}
				/>
				{errors.password && <p className='error'>{errors.password.message}</p>}
				<br />
				<button type='submit'>Sign In</button>
				<br />
				<button type='button' id='google-signin' onClick={signInWithGoogle}>
					{'Sigh In With '}
					<FontAwesomeIcon icon={faGoogle} />
				</button>
			</form>

			<Link to='/reset'>Forgot Password</Link>
		</div>
	);
};
