import { createLazyFileRoute } from '@tanstack/react-router';

import { useQuery } from '@apollo/client';
import { graphql } from 'gql.tada';
import { useState } from 'react';

export const Route = createLazyFileRoute('/')({
	component: Index,
});
const ALL_PROJECTS = graphql(`
	query Projects {
		allProjects {
			_id
			title
		}
	}
`);

function Index() {
	const [showProjects, setShowProjects] = useState(false);
	const { data, error, loading } = useQuery(ALL_PROJECTS);

	const handleShowProjects = () => {
		setShowProjects(true);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return (
		<>
			{!showProjects && (
				<div>
					<p>Welcome! Click here to display all the projects</p>
					<button onClick={handleShowProjects}>Show Projects</button>
				</div>
			)}
			{showProjects && (
				<div>{data && data?.allProjects?.map((project) => <p key={project?._id}>{project?.title}</p>)}</div>
			)}
		</>
	);
}
