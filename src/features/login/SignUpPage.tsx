import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthState } from 'react-firebase-hooks/auth';

import { login, selectApp } from '../app/appSlice';
import languages from '../../assets/languages.json';
import './_sign.scss';
import {
	auth,
	registerWithEmailAndPassword,
	signInWithGoogle,
} from '../../firebase';

interface Input {
	name: string;
	email: string;
	password: string;
	password2: string;
}

export const SignUpPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<Input>({ mode: 'onSubmit', reValidateMode: 'onChange' });

	const dispatch = useDispatch();

	const { isAuthenicated, language } = useSelector(selectApp);
	const isAuthRef = useRef<boolean>(isAuthenicated);

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthRef.current) {
			navigate('/main');
		}
	}, [navigate]);

	const [user, loading, error] = useAuthState(auth);

	useEffect(() => {
		if (loading) return;
		if (user) {
			dispatch(login(user));
			reset();
			navigate('/main');
		}
		if (error) {
			console.log('SIGN UP!!!!', error);
		}
	}, [loading, error, user, dispatch, reset, navigate]);

	const onSubmit: SubmitHandler<Input> = (data) => {
		registerWithEmailAndPassword(data.name, data.email, data.password);
	};

	return (
		<>
			<h2>Sign Up</h2>

			<form action='' onSubmit={handleSubmit(onSubmit)} className='signForm'>
				<input
					type='text'
					placeholder='Name'
					{...register('name', {
						required: languages.errors.signup.name.required[language],
						minLength: {
							value: 2,
							message: languages.errors.signup.name.length[language],
						},
						validate: {
							firstCapital: (value: string) =>
								/^[A-Z]/.test(value)
									? true
									: languages.errors.signup.name.capital[language],
						},
					})}
				/>
				{errors.name && <p className='error'>{errors.name.message}</p>}
				<br />
				<input
					type='email'
					placeholder='E-Mail'
					autoComplete='off'
					{...register('email', {
						required: languages.errors.signup.email.required[language],
					})}
				/>
				{errors.email && <p className='error'>{errors.email.message}</p>}
				<br />
				<input
					type='password'
					placeholder='Password'
					autoComplete='off'
					{...register('password', {
						required: languages.errors.signup.password.required[language],
						minLength: {
							value: 8,
							message: languages.errors.signup.password.length[language],
						},
						validate: {
							letter: (value) =>
								/[a-z]+/.test(value)
									? true
									: languages.errors.signup.password.letter[language],
							capital: (value) =>
								/[A-Z]+/.test(value)
									? true
									: languages.errors.signup.password.capital[language],
							number: (value) =>
								/[0-9]+/.test(value)
									? true
									: languages.errors.signup.password.number[language],
							simbol: (value) =>
								/[!@#$%^&*()]+/.test(value)
									? true
									: languages.errors.signup.password.simbol[language],
						},
					})}
				/>
				{errors.password && <p className='error'>{errors.password.message}</p>}
				<br />
				<input
					type='password'
					placeholder='Password2'
					autoComplete='off'
					{...register('password2', {
						required: languages.errors.signup.password2.required[language],
						validate: {
							//MU5wEafkf@EASpb
							match: (value: string) =>
								watch('password') == value
									? true
									: languages.errors.signup.password2.match[language],
						},
					})}
				/>
				{errors.password2 && (
					<p className='error'>{errors.password2.message}</p>
				)}
				<br />
				<button type='submit'>Sign Up</button>
				<br />
				<button type='button' id='google-signin' onClick={signInWithGoogle}>
					{'Sigh In With '}
					<FontAwesomeIcon icon={faGoogle} />
				</button>
			</form>
		</>
	);
};
