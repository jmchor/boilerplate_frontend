import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router';
import { useFindProject } from '../../../services/findProject';
import KanbanBoard from '../../../components/Kanban/KanbanBoard';
import { HomePageWrapper } from '../../../styles/HomeRouteStyles';
import { useAuth } from '../../../auth';
import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import { CenteredDiv } from '../../../styles/CreateProjectStyles';
import styled from 'styled-components';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BsBoxArrowInUpRight, BsCaretDownSquare } from 'react-icons/bs';
import { Button } from '../../../components/cards/ProjectList';
import { FiEdit } from 'react-icons/fi';

export const Route = createFileRoute('/_layout-withAuth/projects/$projectid')({
	component: Project,
});

const TechBox = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		li {
			margin: 0;
			padding: 0;
		}
	}
`;

const TechBoxInner = styled.div`
	width: 50%;
	text-align: center;
`;

const TechList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const CustomListItem = styled.li`
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

const VerticalTechBox = styled(TechBox)`
	flex-direction: column;
	padding: 5rem 0 10rem 0;
`;

const PackageList = styled.ul`
	margin-left: 2rem !important;
`;

const DownloadButtonContainer = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
`;

const CustomAccordionSummary = styled(AccordionSummary)`
	p {
		margin: 0;
		font-size: 16px;
	}
`;

const ProjectTitleWrapper = styled.div`
	box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	padding: 4rem;
	margin-top: 5rem;
	h1 {
		margin: 0;
	}
`;

const TitleRow = styled.div`
	display: flex;
	justify-content: flex-start;
`;

function Project() {
	const projectId = useParams({ from: '/_layout-withAuth/projects/$projectid', select: (p) => p.projectid });
	const { user } = useAuth();

	const [isUserCreator, setIsUserCreator] = useState<boolean>(false);

	const navigate = useNavigate();

	const { data, loading } = useFindProject(projectId);

	const project = data?.findProject;
	const kanban = data?.findProject?.kanban;

	useEffect(() => {
		if (user?._id === data?.findProject?.createdBy?._id) {
			setIsUserCreator(true);
		}
	}, [user?._id, data?.findProject?.createdBy?._id]);

	const removeLiTags = (input: string) => {
		return input.replace(/<\/?li>/g, ''); // Removing <li> and </li> tags
	};

	const combineScripts = (frontend: string, backend: string) => {
		const scriptLines = frontend
			.split('<li>')
			.filter((line: string) => line.trim().length > 0)
			.concat(backend.split('<li>').filter((line: string) => line.trim().length > 0));
		const cleanScripts = scriptLines?.map((line: string) => removeLiTags(line)).join('\n');
		return cleanScripts;
	};

	const generateShellScript = (script: string, download: string) => {
		const scriptLines = script.split('<li>').filter((line: string) => line.trim().length > 0);
		const cleanScripts = scriptLines?.map((line: string) => removeLiTags(line)).join('\n');
		const shellScript = `#!/bin/bash\n${cleanScripts}`;

		const element = document.createElement('a');
		const file = new Blob([shellScript], { type: 'text/plain' });

		element.href = URL.createObjectURL(file);
		element.download = `${download}-script.sh`;
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	return (
		<div>
			<ProjectTitleWrapper>
				<TitleRow>
					<h1>{project?.title}</h1>{' '}
					<Button onClick={() => navigate({ to: `/projects/${project?._id}/edit` as string })}>
						<FiEdit color='black' />
					</Button>
				</TitleRow>
				<p>{project?.description}</p>
			</ProjectTitleWrapper>
			<HomePageWrapper>
				<VerticalTechBox>
					{isUserCreator && !loading ? (
						<KanbanBoard kanbanId={kanban?._id as string} />
					) : (
						loading && (
							<CenteredDiv>
								<MoonLoader color='var(--blue)' />
							</CenteredDiv>
						)
					)}
				</VerticalTechBox>
				<TechBox>
					<TechBoxInner>
						<h3>Frontend</h3>
						<TechList>
							<CustomListItem>
								<b>Framework</b>: {project?.frontend?.framework}
							</CustomListItem>
							{project?.frontend?.gqlClient && (
								<CustomListItem>
									<b>Apollo GraphQL Client</b>
								</CustomListItem>
							)}
							<li>
								<Accordion>
									<CustomAccordionSummary
										expandIcon={<BsCaretDownSquare />}
										aria-controls='panelpackagebackend-content'
										id='panelpackagebackend-header'
									>
										<p>
											<b>Packages</b>
										</p>
									</CustomAccordionSummary>
									<AccordionDetails>
										<PackageList>{project?.frontend?.packages?.map((p) => <li key={p}>{p}</li>)}</PackageList>
									</AccordionDetails>
								</Accordion>
							</li>
						</TechList>
					</TechBoxInner>
					<TechBoxInner>
						<h3>Backend</h3>
						<TechList>
							<CustomListItem>
								<b>Environment</b>: {project?.backend?.environment}
							</CustomListItem>
							{project?.frontend?.gqlClient && (
								<CustomListItem>
									<b>Apollo GraphQL Server</b>
								</CustomListItem>
							)}
							<CustomListItem>
								<b>Module Type</b>: {project?.backend?.moduleType}
							</CustomListItem>
							{project?.backend?.cms && (
								<CustomListItem>
									<b>CMS</b>: {project?.backend?.cms}
								</CustomListItem>
							)}
							<CustomListItem>
								<b>Database</b>: {project?.backend?.database}
							</CustomListItem>
							<li>
								<Accordion>
									<CustomAccordionSummary
										expandIcon={<BsCaretDownSquare />}
										aria-controls='panelpackagefrontend-content'
										id='panelpackagefrontend-header'
									>
										<p>Packages</p>
									</CustomAccordionSummary>
									<AccordionDetails>
										<PackageList>{project?.backend?.packages?.map((p) => <li key={p}>{p}</li>)}</PackageList>
									</AccordionDetails>
								</Accordion>
							</li>
						</TechList>
					</TechBoxInner>
				</TechBox>
				<TechBox>
					<div>
						<h3>Install Scripts</h3>
						<Accordion>
							<CustomAccordionSummary
								expandIcon={<BsCaretDownSquare />}
								aria-controls='panel1-content'
								id='panel1-header'
							>
								<p>Frontend</p>
							</CustomAccordionSummary>
							<AccordionDetails>
								<ul>
									<div dangerouslySetInnerHTML={{ __html: project?.installScripts?.frontend }} />
								</ul>
								<DownloadButtonContainer>
									<button onClick={() => generateShellScript(project?.installScripts?.frontend as string, 'frontend')}>
										Download Frontend Script
									</button>
								</DownloadButtonContainer>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<CustomAccordionSummary
								expandIcon={<BsCaretDownSquare />}
								aria-controls='panel2-content'
								id='panel2-header'
							>
								<p>Backend</p>
							</CustomAccordionSummary>
							<AccordionDetails>
								<ul>
									<div dangerouslySetInnerHTML={{ __html: project?.installScripts?.backend }} />
								</ul>
								<DownloadButtonContainer>
									<button onClick={() => generateShellScript(project?.installScripts?.backend as string, 'backend')}>
										Download Backend Script
									</button>
								</DownloadButtonContainer>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<CustomAccordionSummary
								expandIcon={<BsCaretDownSquare />}
								aria-controls='panel2-content'
								id='panel2-header'
							>
								<p>Full Script</p>
							</CustomAccordionSummary>
							<AccordionDetails>
								<ul>
									<div dangerouslySetInnerHTML={{ __html: project?.installScripts?.frontend }} />
									<div dangerouslySetInnerHTML={{ __html: project?.installScripts?.backend }} />
								</ul>
								<DownloadButtonContainer>
									<button
										onClick={() =>
											generateShellScript(
												combineScripts(
													project?.installScripts?.frontend as string,
													project?.installScripts?.backend as string
												) as string,
												'full'
											)
										}
									>
										Download Full Script
									</button>
								</DownloadButtonContainer>
							</AccordionDetails>
						</Accordion>
					</div>
				</TechBox>
			</HomePageWrapper>
		</div>
	);
}
