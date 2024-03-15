import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout-withAuth/projects/$projectid/edit')({
	component: EditProject,
});

function EditProject() {
	return <div> Nothing here yet</div>;
}
