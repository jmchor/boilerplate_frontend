import { createFileRoute } from '@tanstack/react-router';
import { useAuth } from '../../../auth';

export const Route = createFileRoute('/_layout-withAuth/user/$username')({
	component: Profile,
});

function Profile() {
	const { user } = useAuth();
	return <div>Hello {user?.username}</div>;
}
