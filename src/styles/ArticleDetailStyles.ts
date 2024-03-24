import styled from 'styled-components';

export const ArticleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: auto;
	width: 100%;
	background-color: white;
	box-shadow:
		0 4px 8px 0 rgba(0, 0, 0, 0.2),
		0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 5px;
	h1 {
		margin: 5rem 0 0 0;
	}
	button {
		color: black;
		font-size: 1.2rem;
		margin-bottom: 2rem;
		cursor: pointer;
	}
`;

export const Banner = styled.img`
	width: 100%;
	height: 30vh;
	object-fit: cover;
`;

export const ArticleText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 10rem;
	text-align: justify;
	margin-top: 5rem;
	margin-bottom: 3rem;

	p,
	h1,
	h2,
	h3 {
		margin: 0;
	}
`;
