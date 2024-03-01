import { createFileRoute, redirect } from '@tanstack/react-router';

import { useAuth } from '../auth';

export const Route = createFileRoute('/dashboard')({
	beforeLoad: ({ context }) => {
		console.log(context);
		if (!context.auth.isLoggedIn || (!context.auth.isLoading && !context.auth.isLoggedIn)) {
			throw redirect({
				to: '/login',
			});
		}
	},
	component: DashboardComponent,
});

function DashboardComponent() {
	const auth = useAuth();

	return (
		<div className='p-2'>
			<h3>Dashboard page</h3>
			<p>Hi {auth?.user?.username}!</p>
			<p>If you can see this, that means you are authenticated.</p>
		</div>
	);
}
