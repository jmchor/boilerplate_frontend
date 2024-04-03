import styled from 'styled-components';
import { CreateFormWrapper, CreateProjectForm } from './CreateProjectStyles';

export const DeleteFormWrapper = styled(CreateFormWrapper)`
	height: auto;
	padding: 5rem;
	margin-top: 20rem;
	width: 50rem;
	input,
	label {
		width: 60%;
		gap: 20px;
		font-size: 16px;
	}
	button {
		font-size: 12px;
	}
`;
export const DeleteUserForm = styled(CreateProjectForm)`
	gap: 1rem;
`;

export const DeleteButton = styled.button`
	font-size: 16px !important;
	color: white !important;
	background-color: var(--muddygreen) !important;
	border: 2px solid var(--muddygreen) !important;
`;
export const InversePurpleDeleteButton = styled(DeleteButton)`
	background-color: white !important;
	color: var(--darkpurple) !important;
	border: 2px solid var(--darkpurple) !important;
`;

export const DeleteContainer = styled.div`
	display: flex;
	justify-content: center;
`;
