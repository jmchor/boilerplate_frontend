import { useQuery } from '@apollo/client';
import { FIND_PROJECT_QUERY } from '../gql/queries';

export const useFindProject = (id: string) => {
	return useQuery(FIND_PROJECT_QUERY, {
		variables: {
			id,
		},
		fetchPolicy: 'network-only',
	});
};
