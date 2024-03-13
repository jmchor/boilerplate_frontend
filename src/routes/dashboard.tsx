import { createFileRoute, redirect } from '@tanstack/react-router';
import { useState } from 'react';

import { useAuth } from '../auth';

import KanbanBoard from '../components/Kanban/KanbanBoard';

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
		<div>
			<KanbanBoard _id={'65ef000d1468c683c5b5cc6e'} backlog={[{ title: 'test' }]} todo={[]} doing={[]} done={[]} />
		</div>
	);
}
