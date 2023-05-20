import Editor, { loader } from '@monaco-editor/react';
import { useSelector } from 'react-redux';
import { selectApp } from '../../app/appSlice';

export const Response = () => {
	const { theme } = useSelector(selectApp);

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
