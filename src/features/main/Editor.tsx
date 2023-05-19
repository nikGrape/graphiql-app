import Editor from '@monaco-editor/react';

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

	return (
		<div id='editor'>
			<Editor
				height='95%'
				width='100%'
				className='edit'
				language={'graphql'}
				value={value}
				defaultValue='// some comment'
				onChange={handleEditorChange}
				options={{
					minimap: {
						enabled: false,
					},
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
