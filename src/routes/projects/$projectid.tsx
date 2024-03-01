import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/projects/$projectid')({
	beforeLoad: ({ context }) => {
		console.log(context);
		if (!context.auth.isLoggedIn || (!context.auth.isLoading && !context.auth.isLoggedIn)) {
			throw redirect({
				to: '/login',
			});
		}
	},
	component: () => <div>Hello /projects/$projectid!</div>,
});
