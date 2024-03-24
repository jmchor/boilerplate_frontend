import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export const IndexPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 80%;
	h2 {
		margin: 0;
		text-align: center;
		color: white;
	}
`;

export const IndexImage = styled.img`
	width: 100px;
	padding: 1.5rem;
	background: var(--radiantBluegrey);
	border-radius: 50%;
`;

export const BoilerFrame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	height: 12rem;
	h1 {
		color: black;
		font-weight: 900;
		margin: 0;
		span {
			background-image: var(--Reversesteelbluegrey);
			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
			font-size: 8rem;
			font-weight: 800;
		}
	}
`;

export const BoilerLink = styled(Link)`
	text-decoration: none;

	&:hover {
		cursor: pointer;
		text-decoration: none;
		transition: 0.2s ease-in-out;
		transform: scale(1.05);
	}
`;

export const Footer = styled.div`
	p {
		margin: 0;
		text-align: center;
		font-size: 1.2rem;
		color: rgba(0, 0, 0, 0.3);
		margin-right: 10%;
	}
`;

export const IconSpan = styled.span`
	position: relative;
	top: 7px;
	left: 5px;
	margin-left: -11px;
	margin-right: -2px;
`;
