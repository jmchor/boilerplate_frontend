import styled from 'styled-components';

export const InnerStyles = styled.div`
	max-width: var(--maxWidth);
	margin-left: 15rem;
	padding: 2rem;
	flex: 1;
	height: 100%;
	width: 100%;
	overflow-y: scroll;
`;

export const ScreenContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const Message = styled.h1`
	font-size: 24px;
`;

export const LaptopScreenSize = 1024;
