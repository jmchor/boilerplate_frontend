import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { KanbanCardFrame, KanbanText } from '../../styles/KanbanStyles.js';

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
