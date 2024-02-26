import { useQuery } from '@apollo/client';
import { graphql } from 'gql.tada';

const ALL_PROJECTS = graphql(`
	query Projects {
		allProjects {
			_id
			title
		}
	}
`);

const useGetProjects = () => {
	const { data, error, loading } = useQuery(ALL_PROJECTS);

	return { data, error, loading };
};

export default useGetProjects;
