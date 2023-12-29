import React from 'react';
import './SignIn.css';

import Header from '../../Components/Header/Header.jsx';
import Logo from '../../IMG/Logo.png';
import Button from '../../Components/UI/Button/Button.jsx';

const SignIn = () => {
	return (
		<div>
			<Header />

			<div>
				<img src={Logo} alt='LogoIMG' className='Logo_Img' />
			</div>
		</div>
	);
};

export default SignIn;
