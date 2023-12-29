import React from 'react';
import './index.css';
import Logo from '../../IMG/Logo.png';

const Index = () => {
	return (
		<div className='Loading_Container'>
			<img src={Logo} alt='LogoIMG' className='Logo_Img' />
			<div className='Loading_Text'>BasketBall Check</div>
		</div>
	);
};

export default Index;
