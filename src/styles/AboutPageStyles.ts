import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	width: 60%;
	height: 100%;
	text-align: justify;
	margin-top: 10rem;

	h1,
	p {
		margin: 0;
	}

	button {
		cursor: pointer;
	}

	a {
		color: lightgrey;
	}
`;

export const AttributionContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	text-align: center;
	margin-bottom: 10rem;
	width: 100%;
	padding: 1rem 0 5rem 0;
`;

export const AttributionLink = styled.a`
	flex: 1 1 25%;
	max-width: calc(50% - 20px);
	color: lightgrey;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	font-size: 10px;
`;

export const LogoImage = styled.img`
	width: 35px;
	height: 35px;
`;
