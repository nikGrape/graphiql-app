import { useDispatch, useSelector } from 'react-redux';
import { selectMain, setHistoryIndex } from '../mainSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import './history.scss';
import { useState } from 'react';

export const History = () => {
	const { editor, historyIndex } = useSelector(selectMain);
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	return (
		<div className={'history-set'}>
			<div id='history-clock' className='history' title='show history'>
				<FontAwesomeIcon
					icon={faClockRotateLeft}
					onClick={() => setShow((show) => !show)}
				/>
			</div>

			<div
				style={{ display: show ? 'block' : 'none' }}
				className='history-points'
			>
				{editor.map((v, i) => (
					<div
						className='history-point'
						key={v.substring(0, 5) + i}
						style={{
							backgroundColor: historyIndex == i ? 'gray' : 'white',
						}}
						onClick={() => dispatch(setHistoryIndex(i))}
					>
						{i}
					</div>
				))}
			</div>
		</div>
	);
};
