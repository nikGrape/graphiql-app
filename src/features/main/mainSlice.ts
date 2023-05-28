import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from 'axios';

type appStateType = {
	editor: string[];
	headers: string[];
	variables: string[];
	historyIndex: number;
	response: string;
	status: 'idle' | 'fulfilled' | 'pending' | 'rejected';
	error: string | null;
};

const initialState: appStateType = {
	editor: [
		`query AllFilms {
  allFilms {
    films {
      created
      title
    }
  }
}`,
		`query AllFilms($filmId: ID) {
  film(filmID: $filmId) {
    title
    director
  }
}`,
	],
	headers: ['//add headers', '//add headers'],
	variables: [
		'',
		`{
    "filmId": 1
}`,
	],
	response: '',
	historyIndex: 0,
	status: 'idle',
	error: null,
};

type FetchResponseParamsType = {
	editor: string;
	headers: string;
	variables: string;
};
export const fetchResponse = createAsyncThunk(
	'/main/fetchResponse',
	async ({ editor, headers, variables }: FetchResponseParamsType) => {
		const res = await axios({
			url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
			method: 'POST',
			data: {
				query: editor,
				variables,
			},
		});

		const response = JSON.stringify(res.data, null, 2);

		return { response, editor, headers, variables };
	}
);

const main = createSlice({
	name: 'app',
	initialState,
	reducers: {
		addEditorHistory: (
			state,
			action: {
				payload: { editor: string; headers: string; variables: string };
			}
		): void => {
			const { editor, headers, variables } = state;
			const { payload } = action;
			if (
				editor[editor.length - 1] != payload.editor &&
				headers[headers.length - 1] != payload.headers &&
				variables[variables.length - 1] != payload.variables
			) {
				state.editor.push(payload.editor);
				state.headers.push(payload.headers);
				state.variables.push(payload.variables);
			}
		},
		setResponse: (state, action: { payload: { response: string } }): void => {
			state.response = action.payload.response;
		},
		setError: (state, action: { payload: string | null }): void => {
			state.error = action.payload;
		},
		setHistoryIndex: (state, action: { payload: number }): void => {
			state.historyIndex = action.payload;
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
			const { response, editor, variables, headers } = action.payload;
			state.response = response;

			if (
				current(state.editor)[state.editor.length - 1] != editor ||
				current(state.headers)[state.headers.length - 1] != headers ||
				current(state.variables)[state.variables.length - 1] != variables
			) {
				state.editor.push(editor);
				state.headers.push(headers);
				state.variables.push(variables);
			}
		});
		builder.addCase(fetchResponse.rejected, (state, action) => {
			state.error = action.error.message || 'unknown error';
			state.response = '';
			state.status = 'rejected';
		});
	},
});

export const selectMain = (state: RootState) => ({
	editor: state.main.editor,
	headers: state.main.headers,
	variables: state.main.variables,
	response: state.main.response,
	status: state.main.status,
	error: state.main.error,
	historyIndex: state.main.historyIndex,
});
export const { addEditorHistory, setResponse, setHistoryIndex, setError } =
	main.actions;
export default main.reducer;
