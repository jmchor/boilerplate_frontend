import { Link, createFileRoute, useNavigate, useParams } from '@tanstack/react-router';
import { useFindProject } from '../../../services/findProject.js';
import KanbanBoard from '../../../components/Kanban/KanbanBoard';
import { useAuth } from '../../../auth';
import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import { CenteredDiv } from '../../../styles/CreateProjectStyles.js';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BsCaretDownSquare } from 'react-icons/bs';

import { FiEdit } from 'react-icons/fi';
import { Button } from '../../../styles/ArticleListStyles.js';
import {
	CustomAccordionSummary,
	CustomListItem,
	DownloadButtonContainer,
	LinkedArticlesHeadline,
	PackageList,
	ProjectDetailWrapper,
	ProjectTitleWrapper,
	TechBox,
	TechBoxInner,
	TechList,
	TitleRow,
	VerticalTechBox,
} from '../../../styles/ProjectDetailStyles.js';

export const Route = createFileRoute('/_layout-withAuth/projects/$projectid')({
	component: Project,
});

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
			<ProjectDetailWrapper>
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
						<div>
							<LinkedArticlesHeadline>Linked Articles</LinkedArticlesHeadline>
							<Accordion>
								<CustomAccordionSummary
									expandIcon={<BsCaretDownSquare />}
									aria-controls='panel1-content'
									id='panel1-header'
								>
									<p>Linked Articles</p>
								</CustomAccordionSummary>
								<AccordionDetails>
									<ul>
										{project?.articles?.map((article) => (
											<li key={article?._id}>
												<Link to={`/articles/${article?._id}` as string}>{article?.title}</Link>
											</li>
										))}
									</ul>
								</AccordionDetails>
							</Accordion>
						</div>
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
				{project?.articles?.length && project?.articles?.length > 0 && (
					<TechBox>
						<div>
							<h3>Linked Articles</h3>
							<Accordion>
								<CustomAccordionSummary
									expandIcon={<BsCaretDownSquare />}
									aria-controls='panel1-content'
									id='panel1-header'
								>
									<p>Linked Articles</p>
								</CustomAccordionSummary>
								<AccordionDetails>
									<ul>
										{project?.articles?.map((article) => (
											<li key={article?._id}>
												<Link to={`/articles/${article?._id}` as string}>{article?.title}</Link>
											</li>
										))}
									</ul>
								</AccordionDetails>
							</Accordion>
						</div>
					</TechBox>
				)}
			</ProjectDetailWrapper>
		</div>
	);
}
