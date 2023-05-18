import { Editor } from './Editor';
import { Headers } from './Headers';
import { Variables } from './Variables';
import { Response } from './Response';

import './_main.scss';
import { useState } from 'react';

export const MainPage = () => {
	const [tab, setTab] = useState<'headers' | 'variables'>('headers');

	return (
		<div id='main'>
			<div id='editor-set'>
				<Editor />
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
					{tab == 'headers' ? <Headers /> : <Variables />}
				</div>
			</div>
			<Response />
		</div>
	);
};
