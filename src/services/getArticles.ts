import { useQuery } from '@apollo/client';
import { All_ARTICLES_QUERY } from '../gql/queries';

const useGetArticles = () => {
	const { data, error, loading } = useQuery(All_ARTICLES_QUERY, {
		fetchPolicy: 'cache-and-network',
	});

	return { data, error, loading };
};

export default useGetArticles;
