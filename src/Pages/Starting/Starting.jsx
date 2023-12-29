import React from 'react';
import './Starting.css';
import Header from '../../Components/Header/Header.jsx';
import Button from '../../Components/UI/Button/Button.jsx';
import { useNavigate } from 'react-router-dom';

const StartingMemberData = [
	{
		id: '1',
		name: '이창보',
	},
	{
		id: '2',
		name: '이재현',
	},
	{
		id: '3',
		name: '한태영',
	},
	{
		id: '4',
		name: '권세원',
	},
	{
		id: '5',
		name: '김규민',
	},
	{
		id: '6',
		name: '김석진',
	},
	{
		id: '7',
		name: '강도현',
	},
	{
		id: '8',
		name: '최서훈',
	},
	{
		id: '9',
		name: '강도현',
	},
	{
		id: '10',
		name: '강웅빈',
	},
];

const Starting = () => {
	const history = useNavigate();

	return (
		<div>
			<Header />

			<div className='Starting_Container'>
				<div className='Starting_Text'>Starting</div>

				<div className='Starting_List'>
					{StartingMemberData.map((item) => (
						<>
							{item.id % 2 == 1 ? (
								<div className='Starting_List_Main'>
									<div className='Starting_List_Num'>
										{item.id}
									</div>
									<div className='Starting_List_Name'>
										{item.name}
									</div>
								</div>
							) : (
								<div className='Starting_List_Main Starting_List_Back_White'>
									<div className='Starting_List_Num'>
										{item.id}
									</div>
									<div className='Starting_List_Name'>
										{item.name}
									</div>
								</div>
							)}
						</>
					))}
				</div>

				<div className='Starting_Buttons'>
					<div className='Starting_ChangeMember'>
						<Button
							Text={'교체 멤버'}
							White={true}
							onClickMethod={() => {
								history('/bench');
							}}
						/>
					</div>

					<div className='Starting_Vote'>
						<Button
							Text={'투표 하러 가기'}
							onClickMethod={() => {
								history('/starting');
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Starting;
