import { useQuery } from '@apollo/client';
import { graphql } from 'gql.tada';

const ALL_PROJECTS = graphql(`
	query Projects($limit: Int) {
		allProjects(limit: $limit) {
			title
			description
			_id
			createdBy {
				username
			}
			frontend {
				framework
				gqlClient
			}
			backend {
				environment
				gqlServer
				cms
				database
			}
		}
	}
`);

const useGetProjects = (limit: number) => {
	const { data, error, loading } = useQuery(ALL_PROJECTS, {
		fetchPolicy: 'network-only',
		variables: {
			limit: limit,
		},
	});

	return { data, error, loading };
};

export default useGetProjects;
