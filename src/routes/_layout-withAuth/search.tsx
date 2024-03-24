import { useQuery } from '@apollo/client';
import { createFileRoute } from '@tanstack/react-router';
import { graphql } from 'gql.tada';
import LandingPage from '../../components/LandingPage';

export const Route = createFileRoute('/_layout-withAuth/search')({
	component: SearchResults,
	validateSearch: (search: Record<string, unknown>): { query: string } => {
		return {
			query: search.query as string,
		};
	},
});

const ARTICLE_TAG_QUERY = graphql(`
	query ARTICLE_TAG_QUERY($tag: String) {
		searchArticlesByTag(tag: $tag) {
			imageUrl
			title
			subheadline
			_id
		}
	}
`);

const PROJECT_TAG_QUERY = graphql(`
	query PROJECT_TAG_QUERY($tag: String) {
		searchProjectsByTag(tag: $tag) {
			_id
			title
			backend {
				environment
				moduleType
				gqlServer
				cms
				packages
				database
			}
			frontend {
				framework
				gqlClient
				packages
			}
			createdBy {
				username
			}
		}
	}
`);
function SearchResults() {
	const { query } = Route.useSearch();

	const { loading, error, data } = useQuery(ARTICLE_TAG_QUERY, {
		variables: {
			tag: query,
		},

		onError: (error) => {
			console.log(error);
		},
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
	});

	const projects = projectData?.searchProjectsByTag || [];

	const articles = data?.searchArticlesByTag || [];

	return <LandingPage projects={projects} articles={articles} />;
}
