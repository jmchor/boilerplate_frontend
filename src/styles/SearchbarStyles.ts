import { Autocomplete } from '@mui/material';
import styled from 'styled-components';

export const GroupHeader = styled.div`
	position: sticky;
	top: -8px;
	padding: 4px 10px;
	color: var(--blue);
	background-color: white;
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: uppercase;
`;

export const GroupItems = styled.ul`
	padding: 0;
	font-size: 1.5rem;
`;

export const CustomAutocomplete = styled(Autocomplete)`
	width: 100%;
	label,
	input {
		font-size: 1.5rem;
		display: flex;
	}

	legend {
		font-size: 1rem;
		color: white;
	}
	background-color: white;
	border-radius: 5px;
`;

export const SearchBarStyles = styled.div`
	margin-bottom: 3rem;
	display: flex;
	gap: 3rem;
	flex-direction: column;
	justify-content: center;
	input {
		width: 100%;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 5rem;
`;
