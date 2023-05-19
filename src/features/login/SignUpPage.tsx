import { login, selectApp } from '../app/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import languages from '../../assets/languages.json';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
	} = useForm<Input>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

	const dispatch = useDispatch();

	const { isAuthenicated, language } = useSelector(selectApp);

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenicated) {
			navigate('/main');
		}
	}, [isAuthenicated]);

	const onSubmit: SubmitHandler<Input> = (data) => {
		console.log(data);
		dispatch(login({ token: 'tmp-token123' }));
		reset();

    navigate('/main');
	};

	return (
		<>
			<div>Sign Up Page</div>

			<form action='' onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					placeholder='name'
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
					placeholder='e-mail'
					{...register('email', {
						required: languages.errors.signup.email.required[language],
					})}
				/>
				{errors.email && <p className='error'>{errors.email.message}</p>}
				<br />
				<input
					type='password'
					placeholder='password'
					autoComplete=''
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
					placeholder='password2'
					autoComplete=''
					{...register('password2', {
						required: languages.errors.signup.password2.required[language],
						validate: {
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
				<button type='submit'>submit</button>
			</form>
		</>
	);
};
