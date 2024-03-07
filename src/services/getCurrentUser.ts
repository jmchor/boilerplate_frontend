import { graphql } from 'gql.tada';
import { useQuery } from '@apollo/client';

export const CURRENT_USER = graphql(`
	query CurrentUser {
		currentUser {
			username
			email
			image
			_id
			projects {
				title
				_id
				description
				frontend {
					framework
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
	const { data, error, loading } = useQuery(CURRENT_USER, {
		fetchPolicy: 'network-only',
	});

	return { data, error, loading };
};
