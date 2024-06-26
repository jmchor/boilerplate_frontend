import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router';
import { useGetCurrentUser } from '../../services/getCurrentUser';

import { ProjectDetailWrapper } from '../../styles/ProjectDetailStyles.js';
import { useMutation } from '@apollo/client';
import React from 'react';
import LinkProjectList from '../../components/cards/LinkProjectList';
import { LinkWrapper, ProjectLinkContainer } from '../../styles/ArticleLinkStyles.js';
import { LINK_ARTICLE_TO_PROJECT } from '../../gql/mutations.js';
import { Project } from '../../types/project.js';
import { CenteredDiv } from '../../styles/CreateProjectStyles.js';
import { MoonLoader } from 'react-spinners';

export const Route = createFileRoute('/_layout-withAuth/articles/$articleid/link')({
	component: LinkArticleToProject,
});

function LinkArticleToProject() {
	const { data, loading, error, startPolling, stopPolling } = useGetCurrentUser();
	const navigate = useNavigate();

	startPolling(10);

	setTimeout(() => {
		stopPolling();
	}, 1000);

	const articleId = useParams({
		from: '/_layout-withAuth/articles/$articleid/link',
		select: (params) => params.articleid,
	});

	const [linkArticleToProject] = useMutation(LINK_ARTICLE_TO_PROJECT);

	const handleClick = (articleId: string, projectId: string) => {
		linkArticleToProject({
			variables: {
				id: articleId,
				projectId: projectId,
			},

			onCompleted: () => {
				navigate({ to: `/projects/${projectId}` as string });
			},
		});
	};

	if (loading) {
		return (
			<CenteredDiv>
				<MoonLoader color='var(--blue)' />
			</CenteredDiv>
		);
	}

	if (error) {
		return <CenteredDiv>{error?.message}</CenteredDiv>;
	}

	return (
		<div>
			<ProjectDetailWrapper>
				<h1> Link Article with one of the following projects</h1>
				<LinkWrapper>
					{data?.currentUser?.projects?.map((project) => (
						<React.Fragment key={project?._id}>
							{!project?.articles?.some((article) => article?._id === articleId) && (
								<ProjectLinkContainer onClick={() => handleClick(articleId, project?._id as string)}>
									<LinkProjectList project={project as Project} />
								</ProjectLinkContainer>
							)}
						</React.Fragment>
					))}
				</LinkWrapper>
			</ProjectDetailWrapper>
		</div>
	);
}
