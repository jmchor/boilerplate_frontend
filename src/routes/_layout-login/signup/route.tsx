import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout-login/signup')({
	component: Signup,
});

function Signup() {
	return (
		<>
			<p>Sign Up</p>
		</>
	);
}
