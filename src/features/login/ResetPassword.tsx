import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, sendPasswordReset } from '../../firebase';
import { useForm, SubmitHandler } from 'react-hook-form';
export const ResetPassword = () => {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<{ email: string }>();
	useEffect(() => {
		if (loading) return;
		if (user) navigate('/dashboard');
		if (error) console.log(error.message);
	}, [user, loading, error, navigate]);

	const onSubmit: SubmitHandler<{ email: string }> = (data) => {
		sendPasswordReset(data.email);
	};

	return (
		<div className='login-page'>
			<h2>Reset password</h2>

			<form action='' onSubmit={handleSubmit(onSubmit)} className='signForm'>
				<input
					type='email'
					placeholder='e-mail'
					{...register('email', {
						required: 'E-Mail is Required',
					})}
				/>
				{errors.email && <p className='error'>{errors.email.message}</p>}

				<button type='submit'>Send password reset email</button>
			</form>
			<div className='down-20'>
				Don't have an account? <Link to='/signup'>Register</Link> now.
			</div>
		</div>
	);
};
