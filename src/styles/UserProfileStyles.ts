import styled from 'styled-components';
import { FlexColumn, FlexRow } from './CreateProjectStyles';

export const ProjectContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 3rem;
	/* border: 1px solid #ccc;
	border-radius: 5px; */

	hr {
		border: 0;
		height: 1px;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
	}
`;

export const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	gap: 3rem;
	margin-top: 5rem;
	/* border: 1px solid #ccc; */
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	background-color: white;
	border-radius: 5px;
`;

export const ExtendedFlexRow = styled(FlexRow)`
	width: 100%;
	flex: 0;
	justify-content: center;
	padding: 0 2rem;
	margin-bottom: 0;
	gap: 30%;
`;

export const FirstProfileRow = styled(FlexRow)`
	width: 100%;
	flex: 0;
	margin-bottom: 0;
	justify-content: flex-start;
	padding: 0 2rem;
	height: 10rem;
`;

export const ExtendedFlexColumn = styled(FlexColumn)`
	width: 100%;
	margin-bottom: -10rem;
	align-items: flex-start;
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */

	hr {
		width: 95%;
		height: 2px;
		margin: 0;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
	}
`;

export const ProfilePicture = styled.img`
	width: 15rem;
	height: 15rem;
	border-radius: 50%;
	position: relative;
	top: -4rem;
	border: 2px double black;
	background-color: #898989;
	object-fit: cover;
`;

export const Tabs = styled.div`
	width: 100%;
	margin: 5rem auto 1.5rem;
	padding: 0;
	border-radius: 2rem;
	@media (max-width: 769px) {
		padding: 2rem 0;
	}
`;

export const TabsNavigation = styled.ul`
	margin-left: 3rem;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 4rem;
	border-radius: 2rem;
	padding-left: 0px;
	@media (max-width: 768px) {
		width: 90%;
	}

	li {
		list-style: none;
		text-align: center;
		cursor: pointer;

		&.active {
			color: var(--dirtypurple);
			border-bottom: 3px solid var(--dirtypurple);
		}
	}
`;

export const BorderStyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

export const ProjectListContainer = styled.div`
	padding: 0 1rem;
`;
