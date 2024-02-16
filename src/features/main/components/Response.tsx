import Editor from '@monaco-editor/react';
import { useSelector } from 'react-redux';
import { selectMain } from '../mainSlice';

export const Response = () => {
	const { response, status } = useSelector(selectMain);

	return (
		<div id='response'>
			<Editor
				height='95%'
				width='100%'
				language={'json'}
				value={status == 'pending' ? 'Pending...' : response}
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
