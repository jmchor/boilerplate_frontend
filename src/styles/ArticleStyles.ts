import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 40vw;
	height: 50vh;
	text-overflow: ellipsis;
	background-color: #f5f5f5;
	box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.26);
	&:hover {
		box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.54);
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
	}
`;

export const TitleImage = styled.img`
	width: 100%;
	height: 50%;
	object-fit: fill;
`;

export const MetaData = styled.div`
	h5,
	p {
		margin: 0;
	}
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h2,
	h4 {
		margin: 0;
	}
`;
