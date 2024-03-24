import { useQuery } from '@apollo/client';
import { graphql } from 'gql.tada';

const All_ARTICLES_QUERY = graphql(`
	query Articles {
		allArticles {
			title
			subheadline
			text
			tags
			imageUrl
			externalLink
			linkedProjects {
				_id
				title
			}
			createdBy {
				username
				_id
			}
			_id
			createdAt
		}
	}
`);

const useGetArticles = () => {
	const { data, error, loading } = useQuery(All_ARTICLES_QUERY, {
		fetchPolicy: 'cache-and-network',
	});

	return { data, error, loading };
};

export default useGetArticles;
