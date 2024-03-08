import { createFileRoute, redirect } from '@tanstack/react-router';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

	const [text, setText] = useState('');

	return <ReactQuill theme='snow' value={text} onChange={setText} />;
}
