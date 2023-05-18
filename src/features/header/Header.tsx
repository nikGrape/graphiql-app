import { LangSwitch } from './langSwitch/LangSwitch';
import './_header.scss';
import { Links } from './Links';
import { useState, useEffect } from 'react';

export const Header = () => {
	const [down, setDown] = useState(true);

	const handleNavigation = (e: React.WheelEvent<HTMLElement>) => {
		const y = e.deltaY;
		if (y > 0) setDown(false);
		else setDown(true);
	};

	useEffect(() => {
		window.addEventListener('wheel', (e) =>
			handleNavigation(e as unknown as React.WheelEvent<HTMLElement>)
		);

		return () => {
			window.removeEventListener('wheel', (e) =>
				handleNavigation(e as unknown as React.WheelEvent<HTMLElement>)
			);
		};
	}, []);

	return (
		<div id={down ? 'header' : 'mini-header'}>
			<LangSwitch />
			<Links />
		</div>
	);
};
