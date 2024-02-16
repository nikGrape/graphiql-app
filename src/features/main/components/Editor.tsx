import Editor from '@monaco-editor/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBook,
	faBookOpen,
	faPlay,
	faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectMain } from '../mainSlice';
import { History } from './History';

type CodeEditorParams = {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	showDocs: boolean;
	setShowDocs: React.Dispatch<React.SetStateAction<boolean>>;
	run: () => void;
};

export const CodeEditor = ({
	value,
	setValue,
	run,
	showDocs,
	setShowDocs,
}: CodeEditorParams) => {
	const { status } = useSelector(selectMain);

	const handleEditorChange = (value: string | undefined) => {
		setValue(value || '');
	};

	return (
		<div id='editor'>
			<div className='run' role='button' onClick={run}>
				<FontAwesomeIcon
					icon={status == 'pending' ? faSpinner : faPlay}
					spin={status == 'pending'}
				/>
			</div>
			<div className='docs-btn' role='button'>
				<FontAwesomeIcon
					icon={showDocs ? faBookOpen : faBook}
					onClick={() => setShowDocs((v) => !v)}
				/>
			</div>
			<History />
			<Editor
				height='95%'
				width='88%'
				className='edit'
				language={'graphql'}
				value={value}
				defaultValue='// some comment'
				onChange={handleEditorChange}
				options={{
					minimap: {
						enabled: false,
					},
					formatOnType: true,
					formatOnPaste: true,
					fontSize: 16,
					scrollbar: {
						vertical: 'hidden',
						horizontal: 'hidden',
					},
				}}
			/>
		</div>
	);
};
