import Editor from '@monaco-editor/react';

import { useState } from 'react';

export const Variables = ({ display }: { display: boolean }) => {
	const [value, setValue] = useState('');

	const handleEditorChange = (value: string | undefined) => {
		setValue(value || '');
	};

	return (
		<div id='editor' style={{ display: display ? 'block' : 'none' }}>
			<Editor
				height='95%'
				width='100%'
				className='edit'
				language={'graphql'}
				value={value}
				theme='light'
				onChange={handleEditorChange}
				options={{
					minimap: {
						enabled: false,
					},
					renderLineHighlight: 'none',
				}}
			/>
		</div>
	);
};
