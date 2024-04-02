import { useQuery } from '@apollo/client';
import { createFileRoute } from '@tanstack/react-router';
import LandingPage from '../../components/LandingPage';
import { ARTICLE_TAG_QUERY, PROJECT_TAG_QUERY } from '../../gql/queries';
import { Project } from '../../types/project';
import { Article } from '../../types/articles';
import { CenteredDiv } from '../../styles/CreateProjectStyles';
import { MoonLoader } from 'react-spinners';

export const Route = createFileRoute('/_layout-withAuth/search')({
	component: SearchResults,
	validateSearch: (search: Record<string, unknown>): { query: string } => {
		return {
			query: search.query as string,
		};
	},
});

function SearchResults() {
	const { query } = Route.useSearch();

	const { loading, error, data } = useQuery(ARTICLE_TAG_QUERY, {
		variables: {
			tag: query,
		},
		onError: (error) => {
			console.log(error);
		},
		fetchPolicy: 'network-only',
	});

	const {
		loading: projectLoading,
		error: projectError,
		data: projectData,
	} = useQuery(PROJECT_TAG_QUERY, {
		variables: {
			tag: query,
		},
		onError: (error) => {
			console.log(error);
		},

		fetchPolicy: 'network-only',
	});

	const projects = projectData?.searchProjectsByTag || [];

	const articles = data?.searchArticlesByTag || [];

	if (loading || projectLoading) {
		return (
			<CenteredDiv>
				<MoonLoader color='var(--blue)' />
			</CenteredDiv>
		);
	}

	if (error || projectError) {
		return (
			<CenteredDiv>
				<h1>Error: {error?.message}</h1>
			</CenteredDiv>
		);
	}

	return <LandingPage projects={projects as Project[]} articles={articles as Article[]} />;
}
