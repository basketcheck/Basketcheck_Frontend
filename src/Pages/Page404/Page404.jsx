import React from 'react';
import './Page404.css';
import { useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/Header.jsx';
import Logo from '../../IMG/Logo.png';
import Button from '../../Components/UI/Button/Button.jsx';

const Page404 = () => {
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

export default Page404;
