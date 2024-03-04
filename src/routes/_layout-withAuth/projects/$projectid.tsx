import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout-withAuth/projects/$projectid')({
	component: () => <div>Hello /projects/$projectid!</div>,
});
