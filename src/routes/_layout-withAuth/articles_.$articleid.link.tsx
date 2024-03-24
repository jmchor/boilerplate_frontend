import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router';
import { useGetCurrentUser } from '../../services/getCurrentUser';

import { ProjectDetailWrapper } from '../../styles/ProjectDetailStyles.js';
import { graphql } from 'gql.tada';
import { useMutation } from '@apollo/client';
import React from 'react';
import LinkProjectList from '../../components/cards/LinkProjectList';
import { LinkWrapper, ProjectLinkContainer } from '../../styles/ArticleLinkStyles.js';

export const Route = createFileRoute('/_layout-withAuth/articles/$articleid/link')({
	component: LinkArticleToProject,
});

const LINK_ARTICLE_TO_PROJECT = graphql(`
	mutation LinkArticleToProject($id: ID!, $projectId: ID!) {
		linkArticleToProject(_id: $id, projectId: $projectId) {
			_id
			title
			linkedProjects {
				_id
				title
			}
		}
	}
`);

function LinkArticleToProject() {
	const { data, loading } = useGetCurrentUser();
	const navigate = useNavigate();

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

	return (
		<ProjectDetailWrapper>
			<h1> Link Article with one of the following projects</h1>

			<LinkWrapper>
				{data?.currentUser?.projects?.map((project) => (
					<React.Fragment key={project._id}>
						{!project.articles.includes(articleId) && (
							<ProjectLinkContainer onClick={() => handleClick(articleId, project._id)}>
								<LinkProjectList project={project} />
							</ProjectLinkContainer>
						)}
					</React.Fragment>
				))}
			</LinkWrapper>
		</ProjectDetailWrapper>
	);
}
