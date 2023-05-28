import {
	configureStore,
	ThunkAction,
	AnyAction,
	ThunkDispatch,
} from '@reduxjs/toolkit';
import app from './features/app/appSlice';
import main from './features/main/mainSlice';

const store = configureStore({
	reducer: {
		app,
		main,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	AnyAction
>;
export type AppThunkDispatch = ThunkDispatch<RootState, null, AnyAction>;

export default store;
