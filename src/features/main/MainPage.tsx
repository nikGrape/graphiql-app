import { CodeEditor } from './components/Editor';
import { Headers } from './components/Headers';
import { Variables } from './components/Variables';
import { Response } from './components/Response';
import { AppThunkDispatch } from '../../store';

import './_main.scss';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectApp } from '../app/appSlice';
import { loader } from '@monaco-editor/react';
import { fetchResponse, setHistoryIndex } from './mainSlice';
import { Modal } from './components/Modal';

import { useNavigate } from 'react-router-dom';
import { selectMain, setError } from './mainSlice';
import { Documentation } from '../documentation/Documentation';

export const MainPage = () => {
	const { isAuthenicated, theme, tokenExparationTime } = useSelector(selectApp);
	const { editor, headers, variables, historyIndex, error } =
		useSelector(selectMain);

	loader.init().then((monaco) => {
		monaco.editor.defineTheme('myTheme', {
			base: theme == 'dark' ? 'vs-dark' : 'vs',
			inherit: true,
			rules: [],
			colors: {
				'editor.background': '#ffffff00',
			},
		});
	});

	const dispatch = useDispatch<AppThunkDispatch>();

	const [tab, setTab] = useState<'headers' | 'variables'>('variables');
	const [editorValue, setEditorValue] = useState(editor[historyIndex]);
	const [headersValue, setHeadersValue] = useState(headers[historyIndex]);
	const [variablesValue, setVariablesValue] = useState(variables[historyIndex]);
	const [showDocs, setShowDocs] = useState(false);

	useEffect(() => {
		setEditorValue(editor[historyIndex]);
		setVariablesValue(variables[historyIndex]);
		setHeadersValue(headers[historyIndex]);
	}, [historyIndex, editor, headers, variables]);

	const run = () => {
		dispatch(
			fetchResponse({
				editor: editorValue,
				headers: headersValue,
				variables: variablesValue,
			})
		);
		dispatch(setHistoryIndex(editor.length));
	};

	const isAuthRef = useRef<boolean>(isAuthenicated);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthRef.current) navigate('/login');
	}, [navigate]);

	useEffect(() => {
		if (tokenExparationTime == 0) return;
		if (tokenExparationTime - new Date().getTime() <= 0) {
			dispatch(logout());
			navigate('/welcome');
		}
	}, [tokenExparationTime, dispatch, navigate]);

	return (
		<div className={`${theme == 'dark' ? 'main-dark' : 'main-light'}`}>
			{showDocs && <Documentation />}
			<div id={'editor-set'}>
				<CodeEditor
					value={editorValue}
					setValue={setEditorValue}
					run={run}
					showDocs={showDocs}
					setShowDocs={setShowDocs}
				/>
				<div id='headers-variables'>
					<div id='tabs'>
						<span
							onClick={() => setTab('headers')}
							className={tab == 'headers' ? 'active-tab' : ''}
						>
							Headers
						</span>
						<span
							onClick={() => setTab('variables')}
							className={tab == 'variables' ? 'active-tab' : ''}
						>
							Variables
						</span>
					</div>
					<Headers
						display={tab == 'headers'}
						value={headersValue}
						setValue={setHeadersValue}
					/>
					<Variables
						display={tab == 'variables'}
						value={variablesValue}
						setValue={setVariablesValue}
					/>
				</div>
			</div>
			<Response />
			{error && (
				<Modal
					closeHint={() => dispatch(setError(null))}
					messages={[
						'Oooops!',
						"We didn't find anything with your request!",
						error.toString(),
					]}
				/>
			)}
		</div>
	);
};
