import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
`;

export const LaneContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	gap: 1rem;
`;

export const KanbanCardFrame = styled.div`
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

export const KanbanText = styled.div`
	word-wrap: break-word;
	text-align: center;
	color: var(--darkpurple);
`;

export const LaneStyle = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 1rem;
	flex: 1;
	min-height: 10rem;
	width: 25%;
	min-width: 10rem;
`;

export const Text = styled.div`
	font-weight: bold;
`;

export const CardContainer = styled.div`
	background-color: lightgray;
	border-radius: 5px;
	flex: 1;
	padding: 1rem;
	display: flex;
	flex-direction: column;

	display: flex;
	align-items: center;
`;
