import { createFileRoute } from '@tanstack/react-router';

import { useState } from 'react';
import useGetProjects from '../services/getProjects';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	const [showProjects, setShowProjects] = useState(false);

	const { data, error, loading } = useGetProjects();
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
