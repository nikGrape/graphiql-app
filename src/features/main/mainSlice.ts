import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

type appStateType = {
	editor: string;
	headers: string;
	variables: string;
	response: string;
	status: string;
	error: string | null;
};

const initialState: appStateType = {
	editor: '',
	headers: '',
	variables: '',
	response: '',
	status: 'idle',
	error: null,
};

export const fetchResponse = createAsyncThunk(
	'/main/fetchResponse',
	async (url: string) => {
		const res = await axios.get(url);
		return res;
	}
);

const main = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setEditorData: (
			state,
			action: {
				payload: { editot: string; headers: string; variables: string };
			}
		): void => {
			state.editor = action.payload.editot;
			state.headers = action.payload.headers;
			state.variables = action.payload.variables;
		},
		setResponse: (state, action: { payload: { response: string } }): void => {
			state.response = action.payload.response;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchResponse.pending, (state) => {
			state.status = 'pending';
			state.error = null;
		});
		builder.addCase(fetchResponse.fulfilled, (state, action) => {
			state.status = 'fulfilled';
			state.error = null;
			state.response = action.payload.data;
		});
		builder.addCase(fetchResponse.rejected, (state, action) => {
			state.error = action.error.message || 'unknown error';
		});
	},
});

export const selectMain = (state: RootState) => ({
	editor: state.main.editor,
	headers: state.main.headers,
	variables: state.main.variables,
	response: state.main.response,
});
export const { setEditorData, setResponse } = main.actions;
export default main.reducer;
