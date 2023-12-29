import React from 'react';
import './index.css';

const Index = ({ White, Text, onClickMethod }) => {
	return (
		<>
			{White ? (
				<button
					className='Button_Container White'
					onClick={onClickMethod}
				>
					{Text}
				</button>
			) : (
				<button
					className='Button_Container Blue'
					onClick={onClickMethod}
				>
					{Text}
				</button>
			)}
		</>
	);
};

export default Index;
