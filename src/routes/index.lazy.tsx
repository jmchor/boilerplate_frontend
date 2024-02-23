import { createLazyFileRoute } from '@tanstack/react-router';

import { useQuery } from '@apollo/client';
import { graphql } from 'gql.tada';

export const Route = createLazyFileRoute('/')({
	component: Index,
});
const ALL_PROJECTS = graphql(`
	query Projects {
		allProjects {
			_id
			title
		}
	}
`);

function Index() {
	const { data, error, loading } = useQuery(ALL_PROJECTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return <>{data && data?.allProjects?.map((project) => <p key={project?._id}>{project?.title}</p>)}</>;
}
