import { Link, createFileRoute, redirect, useNavigate } from '@tanstack/react-router';

import SearchBar from '../components/SearchBar';

export const Route = createFileRoute('/dashboard')({
	beforeLoad: ({ context }) => {
		console.log(context);
		if (!context.auth.isLoading && !context.auth.isLoggedIn) {
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
