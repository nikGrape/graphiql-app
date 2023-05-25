import { CodeEditor } from './components/Editor';
import { Headers } from './components/Headers';
import { Variables } from './components/Variables';
import { Response } from './components/Response';

import './_main.scss';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectApp } from '../app/appSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export const MainPage = () => {
	const [tab, setTab] = useState<'headers' | 'variables'>('headers');
	const [openTabs, setOpenTabs] = useState<boolean>(true);
	const { isAuthenicated, theme, tokenExparationTime } = useSelector(selectApp);
	const isAuthRef = useRef<boolean>(isAuthenicated);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isAuthRef.current) navigate('/login');
	}, [navigate]);

	useEffect(() => {
		if (tokenExparationTime - new Date().getTime() <= 0) {
			dispatch(logout);
			navigate('/welcome');
		}
	});

	return (
		<div className={theme == 'dark' ? 'main-dark' : 'main-light'}>
			<div id={openTabs ? 'editor-set' : 'editor-set-mini'}>
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
						<span
							id='open-tabs'
							onClick={() => setOpenTabs((openTabs) => !openTabs)}
						>
							{openTabs ? (
								<FontAwesomeIcon icon={faAngleDown} />
							) : (
								<FontAwesomeIcon icon={faAngleUp} />
							)}
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
