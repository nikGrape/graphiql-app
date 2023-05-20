import { CodeEditor } from './components/Editor';
import { Headers } from './components/Headers';
import { Variables } from './components/Variables';
import { Response } from './components/Response';

import './_main.scss';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectApp } from '../app/appSlice';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
	const [tab, setTab] = useState<'headers' | 'variables'>('headers');
	const { isAuthenicated, theme } = useSelector(selectApp);
	const isAuthRef = useRef<boolean>(isAuthenicated);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthRef.current) navigate('/login');
	}, [navigate]);

	return (
		<div className={theme == 'dark' ? 'main-dark' : 'main-light'}>
			<div id='editor-set'>
				<CodeEditor />
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
					<Headers display={tab == 'headers'} />
					<Variables display={tab == 'variables'} />
				</div>
			</div>
			<Response />
		</div>
	);
};
