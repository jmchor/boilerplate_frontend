import { Paper } from '@mui/material';
import styled, { css } from 'styled-components';

// export interface LinkButtonProps {
// 	active: boolean;
// }

export const heights: number[] = [300, 330, 360, 390, 420, 450, 480, 510, 540, 570];

export const StyledPaper = styled(Paper)`
	text-align: center;
`;

export const CenteredWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: auto;
	margin-top: 20rem;
	color: white;
	background-color: none;
`;

export const SmallCenteredWrapper = styled.div`
	margin-top: 10rem;
`;

export interface ImageProps {
	active: boolean;
}
export const HomePageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 0 auto;
	width: 80%;
`;

export const ProjectGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	grid-gap: 5rem;
	padding: 1rem;
	place-items: center;
`;
export const ArticleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	gap: 5rem;
`;

export const FilterContainer = styled.div`
	margin-bottom: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 5rem 2rem 5rem;
`;

export const MoreButton = styled.button`
	color: var(--steelbluegrey);
	background: none;
	border: none;
	cursor: pointer;
`;

export const LinkButton = styled.button`
	color: var(--blue);
	background: none;
	border: none;
	font-size: 1.1em;
	cursor: pointer;
`;

export const Image = styled.img<ImageProps>`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	padding: 7px;
	${({ active }) =>
		active &&
		css`
			background-color: var(--blue);
		`};
`;

export const ContainerWithHeader = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	text-align: center;
	padding: 6rem 0;
`;

export const OptionalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
`;
