import styled from 'styled-components';
import { HomePageWrapper } from './HomeRouteStyles';
import { AccordionSummary } from '@mui/material';

export const TechBox = styled.div`
	display: flex;
	gap: 1rem;

	justify-content: center;
	width: 80%;
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		li {
			margin: 0;
			padding: 0;
			color: var(--darkpurple);
		}
	}
`;

export const TechBoxInner = styled.div`
	width: 50%;
	text-align: center;
`;

export const TechList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const CustomListItem = styled.li`
	border-radius: 4px;
	background: #fff;
	box-shadow:
		0px 2px 1px -1px rgba(0, 0, 0, 0.2),
		0px 1px 1px 0px rgba(0, 0, 0, 0.14),
		0px 1px 3px 0px rgba(0, 0, 0, 0.12);
	min-height: 48px;
	padding: 0 16px !important;
	display: flex;
	align-items: center;
	font-size: 16px;

	b {
		margin: 12px 0;
	}
`;

export const VerticalTechBox = styled(TechBox)`
	flex-direction: column;
	padding: 5rem 0 10rem 0;
`;

export const PackageList = styled.ul`
	margin-left: 2rem !important;
`;

export const DownloadButtonContainer = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
`;

export const CustomAccordionSummary = styled(AccordionSummary)`
	p {
		margin: 0;
		font-size: 16px;
	}
`;

export const ProjectTitleWrapper = styled.div`
	box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
	border-radius: 5px 5px 0 0;
	padding: 4rem;
	margin-top: 5rem;
	color: black;
	background-color: white;
	h1 {
		margin: 0;
	}
`;

export const ProjectDetailWrapper = styled(HomePageWrapper)`
	color: white;
	background-color: #ffffff36;
	width: 100%;
	align-items: center;
`;

export const TitleRow = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const LinkedArticlesHeadline = styled.h3`
	margin: 2.05rem;
`;
