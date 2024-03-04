import { Outlet, createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/_layout-noAuth')({
	loader: ({ context }) => {
		context.auth.setWithNav(true);
	},
	component: LoginLayoutComponent,
});

const LoginWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

function LoginLayoutComponent() {
	return (
		<LoginWrapper>
			<Outlet />
		</LoginWrapper>
	);
}
