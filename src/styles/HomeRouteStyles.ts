import styled, { css } from 'styled-components';

export interface LinkButtonProps {
	active: boolean;
}

export const IndexPageWrapper = styled.div`
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
	color: var(--blue);
	background: none;
	border: none;
	cursor: pointer;
`;

export const LinkButton = styled.button<LinkButtonProps>`
	color: var(--blue);
	background: none;
	border: none;
	font-size: 1.1em;
	cursor: pointer;

	/* Apply red color when active */
	${({ active }) =>
		active &&
		css`
			color: red;
		`}
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
