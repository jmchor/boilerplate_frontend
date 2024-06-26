import { useQuery } from '@apollo/client';
import { ALL_PROJECTS } from '../gql/queries';

const useGetProjects = (limit: number) => {
	const { data, error, loading } = useQuery(ALL_PROJECTS, {
		fetchPolicy: 'cache-and-network',
		variables: {
			limit: limit,
		},
	});

	return { data, error, loading };
};

export default useGetProjects;
