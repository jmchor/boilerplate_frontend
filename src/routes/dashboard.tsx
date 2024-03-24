import { createFileRoute, redirect } from '@tanstack/react-router';

import SearchBar from '../components/SearchBar';

export const Route = createFileRoute('/dashboard')({
	loader: ({ context }) => {
		if (!context.auth.cookieLoading && !context.auth.isLoggedIn) {
			throw redirect({
				to: '/login',
			});
		}
	},
	component: Dashboard,
});

function Dashboard() {
	return <SearchBar />;
}
