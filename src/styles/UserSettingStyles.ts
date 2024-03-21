import styled from 'styled-components';
import { CustomFlexRow, FlexBox } from '../components/CreateArticleFormComponent';
import { FlexColumn } from './CreateProjectStyles';

export const UserEditFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const UserEditFlexBox = styled(FlexBox)`
	gap: 3rem;
	justify-content: center;
	align-items: flex-start !important;
`;

export const ButtonFlexColumn = styled(FlexColumn)`
	gap: 1rem;
	button {
		font-size: 16px;
		width: 20rem;
		background-color: var(--darkpurple);
		color: white;
	}
`;

export const EditCustomFlexRow = styled(CustomFlexRow)`
	align-items: flex-start;
	margin-bottom: 4rem;
	button {
		font-size: 16px;
		width: 20rem;
		background-color: var(--darkpurple);
		color: white;
	}
`;
