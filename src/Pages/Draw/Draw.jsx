import React from 'react';
import './Draw.css';
import { useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Button from '../../Components/UI/Button/Button';

const team1 = [
	{
		type: 'team1',
		name: '이창보',
	},
	{
		type: 'team1',
		name: '한태영',
	},
	{
		type: 'team1',
		name: '김규민',
	},
	{
		type: 'team1',
		name: '오창민',
	},
	{
		type: 'team1',
		name: '최성훈',
	},
];

const team2 = [
	{
		type: 'team2',
		name: '이재현',
	},
	{
		type: 'team2',
		name: '권세원',
	},
	{
		type: 'team2',
		name: '김석진',
	},
	{
		type: 'team2',
		name: '강도현',
	},
	{
		type: 'team2',
		name: '강웅빈',
	},
];

const Draw = () => {
	const history = useNavigate();

	return (
		<div>
			<Header />

			<div className='Draw_Container'>
				<div className='Draw_Text'>5 VS 5</div>

				<div className='Draw'>
					<div className='Draw_Left'>
						{team1.map((item) => (
							<>
								<div>{item.name}</div>
							</>
						))}
					</div>
					<div className='Draw_Right'>
						{team2.map((item) => (
							<div>{item.name}</div>
						))}
					</div>
				</div>

				<div className='Draw_ButtonDiv'>
					<Button White={true} Text={'팀 뽑기'} />
				</div>

				<div className='Draw_NowPeople'>
					<Button
						Text={'현재 참가자'}
						onClickMethod={() => {
							history('/starting');
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Draw;
