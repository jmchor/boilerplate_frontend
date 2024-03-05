import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';
import styled from 'styled-components';
import { useAuth } from '../auth';

export const Route = createFileRoute('/_layout-withAuth')({
	beforeLoad: ({ context }) => {
		if (!context.auth.isLoggedIn || (!context.auth.isLoading && !context.auth.isLoggedIn)) {
			throw redirect({
				to: '/login',
			});
		}
	},
	component: WithAuthComponent,
});

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 0 auto;
	width: 80%;
`;

function WithAuthComponent() {
	const { setWithNav } = useAuth();
	setWithNav(true);
	return (
		<Wrapper>
			<Outlet />
		</Wrapper>
	);
}
