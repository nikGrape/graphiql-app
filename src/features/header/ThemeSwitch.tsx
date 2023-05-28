import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { selectApp, setTheme } from '../app/appSlice';

const ThemeSwitch = () => {
	const { theme } = useSelector(selectApp);

	const dispatch = useDispatch();

	const dark = `
  :root {
    color:  #ffffff;
    background-color: #213547;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #747bff;
    color: #ffffff;
  }

  button:hover {
    border: none;
    background-color: #404f91;
  }

  #header {
    background-color: #182734;
  }
`;

	const light = `
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  `;

	const handleClick = () => {
		if (theme == 'light') {
			dispatch(setTheme('dark'));
		} else {
			dispatch(setTheme('light'));
		}
	};

	return (
		<HelmetProvider>
			<div onClick={handleClick} className='theme' role='button'>
				<Helmet>
					<style>{theme == 'light' ? light : dark}</style>
				</Helmet>
				{theme == 'light' ? (
					<FontAwesomeIcon icon={faSun} />
				) : (
					<FontAwesomeIcon icon={faMoon} />
				)}
			</div>
		</HelmetProvider>
	);
};

export default ThemeSwitch;
