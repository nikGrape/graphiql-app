import './modal.scss';

interface HintProps {
	messages: string[];
	closeHint: () => void;
}

export const Modal = ({ messages, closeHint }: HintProps) => {
	return (
		<>
			<div className='hint'>
				<button type='button' className='cross' onClick={() => closeHint()}>
					X
				</button>
				{messages.map((msg) => (
					<p key={msg}>{msg}</p>
				))}
			</div>
			<div
				className='blur'
				data-testid='blur-window'
				onClick={() => closeHint()}
			></div>
		</>
	);
};
