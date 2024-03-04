import { createFileRoute } from '@tanstack/react-router';
import SignupForm from '../../../components/SignupForm';

export const Route = createFileRoute('/_layout-noAuth/signup')({
	component: Signup,
});

function Signup() {
	return <SignupForm />;
}
