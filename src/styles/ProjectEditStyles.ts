import styled from 'styled-components';
import { CreateFormWrapper, CreateProjectForm } from './CreateProjectStyles';

export const EditProjectWrapper = styled(CreateFormWrapper)`
	justify-content: flex-start;
	h1 {
		margin: 5rem 0 0 0;
	}
	height: auto;
	margin-top: 10rem;
`;

export const EditProjectForm = styled(CreateProjectForm)`
	gap: 2rem;
	margin-bottom: 8rem;
`;
