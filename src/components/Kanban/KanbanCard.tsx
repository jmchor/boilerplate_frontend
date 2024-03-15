import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';

const KanbanCardFrame = styled.div`
	padding: 2rem;
	background-color: white;
	margin: 0.5rem;
	border-radius: 5px;
	border: 2px solid gray;
	box-shadow: 0px 0px 5px 2px #2121213b;
	transform: ${({ transform }) => transform};
	max-width: 90%;
	width: 100%;
	word-wrap: break-word;
`;

const KanbanText = styled.div`
	word-wrap: break-word;
	text-align: center;
`;

const KanbanCard = ({ title, index, parent }: { title: string; index: number; parent: string }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: title,
		data: {
			title,
			index,
			parent,
		},
	});

	return (
		<KanbanCardFrame
			className='KanbanCard'
			transform={CSS.Translate.toString(transform)}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
		>
			<KanbanText>{title}</KanbanText>
		</KanbanCardFrame>
	);
};

export default KanbanCard;
