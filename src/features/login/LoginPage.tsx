import { login, selectApp } from '../app/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './_sign.scss';

interface Input {
	email: string;
	password: string;
}

export const LoginPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Input>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

	const dispatch = useDispatch();

	const { isAuthenicated } = useSelector(selectApp);
	const navigate = useNavigate();
	const isAuthRef = useRef<boolean>(isAuthenicated);

	useEffect(() => {
		if (isAuthRef.current) {
			navigate('/main');
		}
	}, [navigate]);

	const onSubmit: SubmitHandler<Input> = (data) => {
		console.log(data);
		dispatch(login({ token: 'tmp-token123' }));
		reset();
		navigate('/main');
	};

	return (
		<>
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
				<button type='submit'>submit</button>
			</form>
		</>
	);
};
