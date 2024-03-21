import styled from 'styled-components';

export const ImagePreview = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	padding: 5px;
	background: #e6e6e6;
`;

export const FileInputButton = styled.label`
	background-color: var(--darkpurple);
	color: #fff;
	padding: 8px 12px;
	border: none;
	cursor: pointer;
	border-radius: 4px;
	width: 20rem !important;

	&:aria-disabled {
		opacity: 0.5;
	}
`;

export const FileInput = styled.input`
	display: none;
`;

export const UploadWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 250px;

	button {
		font-size: 16px;
		width: 20rem;
		background-color: var(--darkpurple);
		color: white;
	}
`;

export const ImageFrame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
`;
