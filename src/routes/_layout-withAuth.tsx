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
	component: HomeLayoutComponent,
});

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

function HomeLayoutComponent() {
	const { setWithNav } = useAuth();
	setWithNav(true);
	return (
		<HomeWrapper className='home-wrapper'>
			<Outlet />
		</HomeWrapper>
	);
}
