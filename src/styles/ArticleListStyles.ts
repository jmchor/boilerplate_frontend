import styled from 'styled-components';
import { FlexRow } from './CreateProjectStyles';

export const PLFlexRow = styled(FlexRow)`
	width: 100%;
	flex: 0;
	margin-bottom: 0;

	& > div {
		flex: 1;
		display: flex;
		justify-content: flex-start;
	}

	h3 {
		margin: 0;
		padding-left: 2rem;
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex: 0;
	background-color: #f8f8f8;
	border-radius: 5px;
	p {
		margin: 0;
		text-align: justify;
		font-size: 1.1em;
	}
`;

export const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	width: fit-content;
`;

export const HeaderImage = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
	padding: 2rem;
`;

export const TextStyles = styled.div`
	width: 95%;
	margin: 0;
	padding: 1rem 2rem;
	text-align: justify;
	font-size: 1.1em;
	background-color: #efeeee;
	border-radius: 5px;
`;
