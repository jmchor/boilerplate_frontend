import { useDroppable } from '@dnd-kit/core';
import KanbanCard from './KanbanCard';
import { Cards } from '../../types/Cards';
import { CardContainer, LaneStyle, Text } from '../../styles/KanbanStyles.js';

interface KanbanLaneProps {
	title: string;
	items: Cards[];
}

const KanbanLane = ({ title, items }: KanbanLaneProps) => {
	const { setNodeRef } = useDroppable({
		id: title,
	});
	if (items) {
		return (
			<LaneStyle>
				<Text>{title}</Text>
				<CardContainer ref={setNodeRef}>
					{items?.map(({ title: cardTitle }, key) => (
						<KanbanCard title={cardTitle as string} key={key} index={key} parent={title} />
					))}
				</CardContainer>
			</LaneStyle>
		);
	}
};

export default KanbanLane;
