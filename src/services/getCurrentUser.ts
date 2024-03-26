import { graphql } from 'gql.tada';
import { useQuery } from '@apollo/client';

export const CURRENT_USER = graphql(`
	query CurrentUser {
		currentUser {
			username
			email
			imageUrl
			_id
			projects {
				title
				_id
				description
				articles {
					_id
				}
				frontend {
					framework
					gqlClient
				}
				backend {
					environment
					gqlServer
					database
				}
			}
			articles {
				title
				_id
				subheadline
				text
				tags
				imageUrl
			}
			likedArticles {
				title
				_id
				createdBy {
					username
					_id
				}
			}
		}
	}
`);

export const useGetCurrentUser = () => {
	const { data, error, loading, startPolling, stopPolling } = useQuery(CURRENT_USER, {
		fetchPolicy: 'network only',
	});
	return { data, error, loading, startPolling, stopPolling };
};
