import styled from 'styled-components';

import CreatableSelect from 'react-select/creatable';
import ReactQuill from 'react-quill';
import { FlexRow } from './CreateProjectStyles';

export const FlexBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	max-width: 80%;
	height: 100%;
	& > label {
		margin: 0;
		height: fit-content;
	}
`;

export const CustomSelect = styled(CreatableSelect)`
	padding-top: 0.5rem;
	width: 100%;
`;

export const CustomFlexRow = styled(FlexRow)`
	margin-bottom: 3rem;
	justify-content: space-between;
	gap: 4rem;
	max-width: 100%;
	& > label {
		margin: 0;
		width: fit-content;
	}
`;

export const ExtendedQuill = styled(ReactQuill)`
	max-width: 100%;
	width: 100%;

	& .ql-editor {
		max-width: 100%;
		word-wrap: break-word;
		hyphens: auto;
		height: 25rem;
		font-weight: normal;
	}
`;
