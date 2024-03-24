import { useState } from 'react';
import { AddCardButton, AddCardContainer, TitleInput } from '../../styles/AddCardStyles.js';

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
