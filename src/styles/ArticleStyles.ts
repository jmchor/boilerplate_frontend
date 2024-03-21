import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	height: 100%;

	text-overflow: ellipsis;
	background-color: #f5f5f5;
	box-shadow: 0 12px 24px 0 hsla(213, 77%, 14%, 1);

	&:hover {
		box-shadow: 0 12px 24px 0 hsla(202, 27%, 45%, 1);
		cursor: pointer;
		text-decoration: none;
	}
`;

export const TagLine = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	gap: 2rem;
	padding: 2rem;
	p {
		margin: 0;
		font-size: 10px;
	}
`;

export const TitleImage = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const MetaData = styled.div`
	h5,
	p {
		margin: 5px;
		font-size: 10px;
	}
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h2 {
		margin: 0;
		font-size: 18px;
	}
	h4 {
		margin: 0;
		font-size: 14px;
	}
`;
