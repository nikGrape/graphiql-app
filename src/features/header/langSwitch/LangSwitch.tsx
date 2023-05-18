import { useDispatch, useSelector } from 'react-redux';

import './_langSwitch.scss';
import { selectApp, setLanguage } from '../../app/appSlice';

export const LangSwitch = () => {
	const dispatch = useDispatch();

	const { language } = useSelector(selectApp);

	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(setLanguage(e.currentTarget.value as 'ru' | 'en'));
	};

	return (
		<div className='sex'>
			<label>English</label>
			<input
				name='lang'
				type='radio'
				value='en'
				onChange={onChange}
				checked={language == 'en'}
			/>
			<label>Русский</label>
			<input
				name='lang'
				type='radio'
				value='ru'
				onChange={onChange}
				checked={language == 'ru'}
			/>
		</div>
	);
};
