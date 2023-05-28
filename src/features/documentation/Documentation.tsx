import scema from '../../assets/scema.json';
import { useState } from 'react';
import './documents.scss';

type keyType = 'Film' | 'Person' | 'Planet' | 'Species' | 'Starship';

export const Documentation = () => {
	const [level1, setLevel1] = useState<boolean>(true);
	const [level2, setLevel2] = useState<boolean[]>([]);

	return (
		<div className='docs'>
			<ul>
				<li onClick={() => setLevel1((level1) => !level1)}>Root:</li>
				{Object.keys(scema.Root).map((k, ind) => (
					<ul style={{ display: level1 ? 'block' : 'none' }} key={k}>
						{
							<li
								onClick={() =>
									setLevel2((level2) => {
										const tmp = [...level2];
										tmp[ind] = !tmp[ind];
										return tmp;
									})
								}
							>
								{k}
							</li>
						}
						{Object.entries(scema.Root[k as keyType]).map((k) => (
							<ul
								style={{ display: level2[ind] ? 'block' : 'none' }}
								key={k.toString()}
							>
								{
									<li className='fields' key={k.toString()}>
										{k[0] + ': ' + k[1]}
									</li>
								}
							</ul>
						))}
					</ul>
				))}
			</ul>
		</div>
	);
};
