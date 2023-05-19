import Editor, { loader } from '@monaco-editor/react';

loader.init().then((monaco) => {
	monaco.editor.defineTheme('myTheme', {
		base: 'vs',
		inherit: true,
		rules: [],
		colors: {
			'editor.background': '#ffffff00',
		},
	});
});

export const Response = () => {
	const code = `{
  test {
    id: id,
  }
}`;

	return (
		<div id='response'>
			<Editor
				height='95%'
				width='100%'
				language={'graphql'}
				value={code}
				theme='myTheme'
				options={{
					scrollbar: {
						vertical: 'hidden',
						horizontal: 'hidden',
					},
					minimap: {
						enabled: false,
					},
					scrollBeyondLastLine: false,
					extraEditorClassName: 'edit',
					fontSize: 16,
					readOnly: true,
					renderLineHighlight: 'none',
				}}
			/>
		</div>
	);
};
