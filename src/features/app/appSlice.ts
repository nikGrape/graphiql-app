import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type themeType = 'light' | 'dark' | 'system';
type appStateType = {
	theme: themeType;
	showHeader: boolean;
	isAuthenicated: boolean;
	token: string | null;
	language: 'ru' | 'en';
};

const initialState: appStateType = {
	theme: 'light',
	showHeader: true,
	isAuthenicated: true,
	token: null,
	language: 'en',
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
		login: (state, action: { payload: { token: string } }): void => {
			state.isAuthenicated = true;
			state.token = action.payload.token;
			localStorage.setItem('gql_token', action.payload.token);
		},
		logout: (state): void => {
			state.isAuthenicated = false;
			state.token = null;
			localStorage.removeItem('gql_token');
		},
		setLanguage: (state, action: { payload: 'ru' | 'en' }): void => {
			state.language = action.payload;
		},
	},
});

export const selectApp = (state: RootState) => ({
	showHeader: state.app.showHeader,
	theme: state.app.theme,
	isAuthenicated: state.app.isAuthenicated,
	language: state.app.language,
});
export const { setShowHeader, setTheme, login, logout, setLanguage } =
	app.actions;
export default app.reducer;
