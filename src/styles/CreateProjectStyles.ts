import styled from 'styled-components';
import Form from './Form.js';

export const CreateFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
	border-radius: 5px;
	box-shadow:
		0 4px 8px 0 rgba(0, 0, 0, 0.2),
		0 6px 20px 0 rgba(0, 0, 0, 0.19);

	h1 {
		margin: 0;
	}
	height: 100%;

	@media screen and (min-width: 2000px) {
		height: 70%;
	}
	background-color: white;
`;

export const CreateProjectForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 20px;
	font-size: 1.5rem;
	line-height: 1.5;
	font-weight: 600;
	width: 60vw;

	label {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1rem 0;
		font-size: 1.3rem;
		word-wrap: break-word;
	}
	input,
	textarea,
	select {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #fff;
		color: #333;
		font-size: 14px;
	}

	button,
	input[type='submit'] {
		width: auto;
		background: none;
		color: black;
		border: 2px solid var(--darkpurple);
		font-size: 2rem;
		font-weight: 600;
		padding: 0.5rem 1.2rem;
	}
`;

export const FlexRow = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	flex: 1;
	gap: 4rem;
	margin-bottom: 3rem;
	/* border: 1px solid black; */
`;

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	/* margin: 0 1rem 0 0;
	border: 2px solid red; */
`;

export const CenteredDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh; /* Full viewport height */
`;
