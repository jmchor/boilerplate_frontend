import { createFileRoute, redirect } from '@tanstack/react-router';
import { useAuth } from '../../../auth';

export const Route = createFileRoute('/_layout-home/user/$username')({
	beforeLoad: ({ context }) => {
		if (!context.auth.isLoggedIn || (!context.auth.isLoading && !context.auth.isLoggedIn)) {
			throw redirect({
				to: '/login',
			});
		}
	},
	component: Profile,
});

function Profile() {
	const { user } = useAuth();
	return <div>Hello {user?.username}</div>;
}
