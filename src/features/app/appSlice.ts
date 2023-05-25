import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { logout as signOut } from '../../firebase';
import { User } from 'firebase/auth';
import { setTokenExparationTime } from './setTokenExparationTime';

type themeType = 'light' | 'dark' | 'system';
type appStateType = {
	theme: themeType;
	showHeader: boolean;
	isAuthenicated: boolean;
	token: string | null;
	language: 'ru' | 'en';
	user: string | null;
	tokenExparationTime: number;
	expLogoutId: NodeJS.Timeout | undefined;
};

const initialState: appStateType = {
	theme: 'light',
	showHeader: true,
	isAuthenicated: false,
	token: null,
	user: null,
	language: 'en',
	tokenExparationTime: 0,
	expLogoutId: undefined,
};

const app = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setTheme: (state, action: { payload: themeType }): void => {
			state.theme = action.payload;
		},
		setShowHeader: (state, action: { payload: boolean }): void => {
			state.showHeader = action.payload;
		},
		login: {
			reducer: (state, action: { payload: { user: string | null } }): void => {
				state.isAuthenicated = true;
				state.user = action.payload.user;
			},
			prepare: (user: User) => {
				return {
					payload: {
						user: user.email,
					},
				};
			},
		},
		logout: (state): void => {
			state.isAuthenicated = false;
			state.token = null;
			state.user = null;
			state.tokenExparationTime = 0;
			state.expLogoutId = undefined;
			signOut();
		},
		setLanguage: (state, action: { payload: 'ru' | 'en' }): void => {
			state.language = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(setTokenExparationTime.fulfilled, (state, action) => {
			state.tokenExparationTime = action.payload;
		});
	},
});

export const selectApp = (state: RootState) => ({
	showHeader: state.app.showHeader,
	theme: state.app.theme,
	isAuthenicated: state.app.isAuthenicated,
	language: state.app.language,
	tokenExparationTime: state.app.tokenExparationTime,
	expLogoutId: state.app.expLogoutId,
});
export const { setShowHeader, setTheme, login, logout, setLanguage } =
	app.actions;
export default app.reducer;
