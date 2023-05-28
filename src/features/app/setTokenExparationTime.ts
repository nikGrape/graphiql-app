import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export const setTokenExparationTime = createAsyncThunk(
	'/app/setTokenExparationTime',
	async (user: User) => {
		const token = await user.getIdTokenResult(false);
		return new Date(token.expirationTime).getTime();
	}
);
