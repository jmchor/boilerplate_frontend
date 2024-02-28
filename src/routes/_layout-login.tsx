import { Outlet, createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/_layout-login')({
	component: LoginLayoutComponent,
});

const LoginWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

function LoginLayoutComponent() {
	return (
		<LoginWrapper>
			<Outlet />
		</LoginWrapper>
	);
}