import { createFileRoute } from '@tanstack/react-router';
import CreateProjectFormComponent from '../../../components/CreateProjectFormComponent';

export const Route = createFileRoute('/_layout-withAuth/projects/new')({
	component: CreateProject,
});

function CreateProject() {
	return (
		<>
			<CreateProjectFormComponent />
		</>
	);
}
