import { useQuery } from '@apollo/client';
import { createFileRoute } from '@tanstack/react-router';
import { graphql } from 'gql.tada';
import LandingPage from '../../components/LandingPage';
import { ARTICLE_TAG_QUERY, PROJECT_TAG_QUERY } from '../../gql/queries';

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

	console.log(projects, articles);

	return <LandingPage projects={projects} articles={articles} />;
}
