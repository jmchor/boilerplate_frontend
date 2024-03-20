import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router';
import { graphql } from 'gql.tada';
import styled from 'styled-components';
import { CenteredDiv } from '../../../styles/CreateProjectStyles';
import { MoonLoader } from 'react-spinners';
import { useQuery } from '@apollo/client';
import { FaLink } from 'react-icons/fa';

export const Route = createFileRoute('/_layout-withAuth/articles/$articleid')({
	component: Article,
});

const ArticleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: auto;
	width: 100%;
	background-color: white;
	box-shadow:
		0 4px 8px 0 rgba(0, 0, 0, 0.2),
		0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 5px;
	h1 {
		margin: 5rem 0 0 0;
	}
	button {
		color: black;
		font-size: 1.2rem;
		margin-bottom: 2rem;
		cursor: pointer;
	}
`;

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

const Banner = styled.img`
	width: 100%;
	height: 30vh;
	object-fit: cover;
`;

const ArticleText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 10rem;
	text-align: justify;
	margin-top: 5rem;
	margin-bottom: 3rem;

	p,
	h1,
	h2,
	h3 {
		margin: 0;
	}
`;

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
