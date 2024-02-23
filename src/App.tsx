import './App.css';

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

function App() {
	const { data, error, loading } = useQuery(ALL_PROJECTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return <>{data && data?.allProjects?.map((project) => <p key={project?._id}>{project?.title}</p>)}</>;
}

export default App;
