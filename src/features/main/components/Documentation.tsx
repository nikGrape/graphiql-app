import scema from '../../../assets/scema.json';
import { useState } from 'react';

export const Documentation = () => {
	const [root, setRoot] = useState<object>(scema);
	const [back, setBack] = useState<object>(scema);

	return (
		<div>
			<div onClick={() => setRoot(back)}>back</div>
			{Object.keys(root).map((key) => (
				<div
					key={key}
					onClick={() => {
						setBack(root);
						setRoot(root[key]);
					}}
				>
					{key + (typeof root[key] == 'string' ? `: ${root[key]}` : '')}
				</div>
			))}
		</div>
	);
};
