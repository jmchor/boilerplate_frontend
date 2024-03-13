import { useState } from 'react';
import styled from 'styled-components';

const AddCardContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const TitleInput = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #fff;
	color: #333;
	font-size: 14px;
`;

const AddCardButton = styled.button`
	width: 15rem;
	font-size: 16px;
	height: 100%;
	border-radius: 5px;
`;

const AddCard = ({ addCard }: { addCard: (title: string) => void }) => {
	const [title, setTitle] = useState<string>('');

	return (
		<AddCardContainer>
			<TitleInput
				id='title'
				type='text'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				placeholder='Add Card'
			/>
			<AddCardButton
				onClick={() => {
					setTitle('');
					addCard(title);
				}}
			>
				Add Card
			</AddCardButton>
		</AddCardContainer>
	);
};
export default AddCard;
