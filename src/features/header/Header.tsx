import { LangSwitch } from './langSwitch/LangSwitch';
import './_header.scss';
import { Links } from './Links';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectApp } from '../app/appSlice';
import ThemeSwitch from './ThemeSwitch';

export const Header = () => {
	const [down, setDown] = useState(true);
	const { showHeader } = useSelector(selectApp);

	const handleStickyHeader = (e: React.WheelEvent<HTMLElement>) => {
		const y = e.deltaY;
		if (y > 0) setDown(false);
		else setDown(true);
	};

	useEffect(() => {
		window.addEventListener('wheel', (e) =>
			handleStickyHeader(e as unknown as React.WheelEvent<HTMLElement>)
		);

		return () => {
			window.removeEventListener('wheel', (e) =>
				handleStickyHeader(e as unknown as React.WheelEvent<HTMLElement>)
			);
		};
	}, []);

	if (!showHeader) return <></>;

	return (
		<div id={down ? 'header' : 'mini-header'}>
			<ThemeSwitch />
			<LangSwitch />
			<Links />
		</div>
	);
};
