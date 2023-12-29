import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/';
import Logo from '../../IMG/Logo.png';
import Button from '../../Components/UI/Button';

const Index = () => {
	const history = useNavigate();

	return (
		<div>
			<Header />
			<div className='Page404_Container'>
				<img src={Logo} alt='LogoIMG' className='Logo_Img' />
				<div className='Page404_Text'>ERROR :: 404</div>
				<Button
					Text={'홈으로'}
					onClickMethod={() => {
						history('/');
					}}
				/>
			</div>
		</div>
	);
};

export default Index;
