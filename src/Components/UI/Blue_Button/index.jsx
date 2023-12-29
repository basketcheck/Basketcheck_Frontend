import React from 'react';
import './index.css';

const Index = ({ Text, onClickMethod }) => {
	return (
		<button className='Button_Container' onClick={onClickMethod}>
			{Text}
		</button>
	);
};

export default Index;
