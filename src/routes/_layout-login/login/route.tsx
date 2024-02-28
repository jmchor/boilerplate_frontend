import { createFileRoute } from '@tanstack/react-router';
import SigninForm from '../../../components/SigninForm';

export const Route = createFileRoute('/_layout-login/login')({
	component: Login,
});

function Login() {
	return <SigninForm />;
}
