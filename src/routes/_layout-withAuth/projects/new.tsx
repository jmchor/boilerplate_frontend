import { createFileRoute, redirect } from '@tanstack/react-router';
import CreateProjectFormComponent from '../../../components/CreateProjectFormComponent';

export const Route = createFileRoute('/_layout-withAuth/projects/new')({
	loader: ({ context }) => {
		if (!context.auth.cookieLoading && !context.auth.isLoggedIn) {
			throw redirect({
				to: '/login',
			});
		}
	},
	component: CreateProject,
});

function CreateProject() {
	return (
		<>
			<CreateProjectFormComponent />
		</>
	);
}
