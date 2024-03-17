import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	font-size: 1.5rem;
	line-height: 1.5;
	font-weight: 600;
	width: 30vw;
	label {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1rem;
		font-size: 1.3rem;
	}
	input,
	textarea,
	select {
		width: 100%;
		padding: 0.5rem;
		font-size: 2rem;
		border: 1px solid black;
		&:focus {
			outline: 0;
			border-color: var(--blue);
		}
	}
	button,
	input[type='submit'] {
		width: auto;
		background: none;
		border: 2px solid var(--bandaid);
		color: white;
		font-size: 2rem;
		font-weight: 600;
		padding: 0.5rem 1.2rem;
	}
`;

export default Form;
