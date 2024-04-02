import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../gql/queries';

export const useGetCurrentUser = () => {
	const { data, error, loading, startPolling, stopPolling } = useQuery(CURRENT_USER, {
		fetchPolicy: 'network-only',
	});
	return { data, error, loading, startPolling, stopPolling };
};
