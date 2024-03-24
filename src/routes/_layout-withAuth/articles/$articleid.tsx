import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router';
import { graphql } from 'gql.tada';
import { CenteredDiv } from '../../../styles/CreateProjectStyles.js';
import { MoonLoader } from 'react-spinners';
import { useQuery } from '@apollo/client';
import { FaLink } from 'react-icons/fa';
import { ArticleText, ArticleWrapper, Banner } from '../../../styles/ArticleDetailStyles.js';

export const Route = createFileRoute('/_layout-withAuth/articles/$articleid')({
	component: Article,
});

export const FIND_ARTICLE = graphql(`
	query FIND_ARTICLE($id: ID) {
		findArticle(_id: $id) {
			title
			text
			subheadline
			tags
			imageUrl
			externalLink
			linkedProjects {
				_id
				title
			}
			createdBy {
				_id
				username
			}
			_id
		}
	}
`);

function Article() {
	const articleId = useParams({ from: '/_layout-withAuth/articles/$articleid', select: (params) => params.articleid });

	const navigate = useNavigate();

	const { data, error, loading } = useQuery(FIND_ARTICLE, {
		variables: {
			id: articleId,
		},
	});

	if (loading) {
		return (
			<CenteredDiv>
				<MoonLoader color='var(--blue)' />
			</CenteredDiv>
		);
	}

	if (error) {
		return (
			<CenteredDiv>
				<h1>Error: {error.message}</h1>
			</CenteredDiv>
		);
	}
	return (
		<ArticleWrapper>
			<Banner src={data?.findArticle?.imageUrl} alt='' />
			<h1>{data?.findArticle?.title}</h1>
			<p style={{ fontStyle: 'italic', color: 'gray', fontSize: '1.7rem', margin: '0.2rem 0 2rem 0' }}>
				{data?.findArticle?.subheadline}
			</p>
			<p style={{ color: 'gray', fontSize: '1.4rem', margin: '0 0 2rem 0' }}>
				{' '}
				by {data?.findArticle?.createdBy?.username}
			</p>
			<button onClick={() => navigate({ to: `/articles/${articleId}/link` })}>
				{' '}
				<FaLink /> Link Article to Project
			</button>
			<hr width='80%' />
			<ArticleText dangerouslySetInnerHTML={{ __html: data?.findArticle?.text }} />
			<hr width='80%' />
			{data?.findArticle?.tags && <p>{data?.findArticle?.tags.map((tag: string) => `#${tag} `)}</p>}
		</ArticleWrapper>
	);
}
