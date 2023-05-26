import Editor from '@monaco-editor/react';

type HeadersParams = {
	display: boolean;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Headers = ({ display, value, setValue }: HeadersParams) => {
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
				defaultValue='// put headers here'
				onChange={handleEditorChange}
				options={{
					minimap: {
						enabled: false,
					},
					renderLineHighlight: 'none',
					useShadowDOM: false,
				}}
			/>
		</div>
	);
};
