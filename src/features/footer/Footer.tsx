import './_footer.scss';
import lang from '../../assets/languages.json';
import { useSelector } from 'react-redux';
import { selectApp } from '../app/appSlice';

export const Footer = () => {
	const { language } = useSelector(selectApp);

	return (
		<div id='footer'>
			<span>
				<a rel='stylesheet' href='https://github.com/nikGrape' target='_blank'>
					<img
						src='https://avatars.githubusercontent.com/u/48928594?v=4'
						alt='github author picture'
						className='author'
					/>
				</a>
				<a rel='stylesheet' href='https://github.com/agusev' target='_blank'>
					<img
						src='https://avatars.githubusercontent.com/u/47907411?v=4'
						alt='github author picture'
						className='author'
					/>
				</a>
				<a rel='stylesheet' href='https://github.com/conf1dent' target='_blank'>
					<img
						src='https://avatars.githubusercontent.com/u/42403544?v=4'
						alt='github author picture'
						className='author'
					/>
				</a>
				<a
					rel='stylesheet'
					href='https://github.com/ANekhaenko'
					target='_blank'
				>
					<img
						src='https://avatars.githubusercontent.com/u/52015317?v=4'
						alt='github author picture'
						className='author'
					/>
				</a>
			</span>
			<p id='footer-year'>{lang.footer.created[language]}</p>
			<a href='https://rs.school/react/' target='_blank'>
				<img
					src='https://rs.school/images/rs_school_js.svg'
					alt='rs logo'
					id='rs-logo'
				/>
			</a>
		</div>
	);
};
