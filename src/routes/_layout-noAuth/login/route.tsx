import { createFileRoute } from '@tanstack/react-router';
import SigninForm from '../../../components/SigninForm.js';

export const Route = createFileRoute('/_layout-noAuth/login')({
	component: Login,
});

function Login() {
	return (
		<>
			<SigninForm />
		</>
	);
}
