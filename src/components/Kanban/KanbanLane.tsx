import { useDroppable } from '@dnd-kit/core';
import KanbanCard from './KanbanCard';
import styled from 'styled-components';
import { Cards } from '../../types/Cards';

interface KanbanLaneProps {
	title: string;
	items: Cards[];
}

const LaneStyle = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 1rem;
	flex: 1;
	min-height: 10rem;
	width: 25%;
	min-width: 10rem;
`;

const Text = styled.div`
	font-weight: bold;
`;

const CardContainer = styled.div`
	background-color: lightgray;
	border-radius: 5px;
	flex: 1;
	padding: 1rem;
	display: flex;
	flex-direction: column;

	display: flex;
	align-items: center;
`;

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
