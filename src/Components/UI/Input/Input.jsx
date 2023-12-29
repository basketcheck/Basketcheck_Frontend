import React from 'react';
import './Input.css';

const Input = ({ Type, PlaceHolder, onChangeMethod }) => {
	return (
		<input
			type={Type}
			placeholder={PlaceHolder}
			className='UI_Input'
			onChange={onChangeMethod}
		/>
	);
};

export default Input;
