import { useQuery } from '@apollo/client';
import { graphql } from 'gql.tada';

const FIND_PROJECT_QUERY = graphql(`
	query FindProject($id: ID) {
		findProject(_id: $id) {
			title
			description
			frontend {
				framework
				gqlClient
				packages
			}
			backend {
				environment
				moduleType
				gqlServer
				cms
				packages
				database
			}
			installScripts {
				frontend
				backend
			}
			kanban {
				backlog {
					title
				}
				todo {
					title
				}
				doing {
					title
				}
				done {
					title
				}

				_id
			}
			articles {
				_id
				title
			}
			_id
			createdBy {
				_id
			}
		}
	}
`);

export const useFindProject = (id: string) => {
	return useQuery(FIND_PROJECT_QUERY, {
		variables: {
			id,
		},
		fetchPolicy: 'network-only',
	});
};
