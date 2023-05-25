import Editor from '@monaco-editor/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

export const CodeEditor = () => {
	const code = `{
  test {
    id: id,
  }
}`;
	const [value, setValue] = useState(code || '');

	const handleEditorChange = (value: string | undefined) => {
		setValue(value || '');
	};

	const run = () => {
		console.log('run!');
		return null;
	};

	return (
		<div id='editor'>
			<div className='run' role='button' onClick={run}>
				<FontAwesomeIcon icon={faPlay} />
			</div>
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
