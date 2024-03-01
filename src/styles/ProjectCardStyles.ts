import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 270px;
	height: 220px;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 15px;
	background-color: #f5f5f5;
	box-shadow: 0 12px 24px 0 #4f7bc8ba;

	&:hover {
		box-shadow: 0 12px 24px 0 #4f7bc8fa;
	}
`;

export const MetaDataWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	width: 80%;
	gap: 5px;
	padding: 5px;
`;

export const ToolImage = styled.img`
	width: 4.5rem;
	height: 4.5rem;
	padding: 2px;
`;

export const MetaData = styled.div`
	h5,
	p {
		margin: 0;
	}
`;

export const Title = styled.div`
	h3 {
		margin: 0;
	}
`;
