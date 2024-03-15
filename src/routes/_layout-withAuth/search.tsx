import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout-withAuth/search')({
	component: SearchResults,
	validateSearch: (search: Record<string, unknown>): { query: string } => {
		return {
			query: search.query as string,
		};
	},
});

//get the tag in question from the params
//use the article and project by tag search to display a grid of all the things
function SearchResults() {
	const { query } = Route.useSearch();

	return <div>Search Results for {query}</div>;
}
