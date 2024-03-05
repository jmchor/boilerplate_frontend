import { Outlet, createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { useAuth } from '../auth';
import usePreventNavigation from '../lib/usePreventNavigation';

export const Route = createFileRoute('/_layout-home')({
	component: HomeLayoutComponent,
});

const HomeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

function HomeLayoutComponent() {
	const { setWithNav } = useAuth();

	setWithNav(true);

	usePreventNavigation('Are you sure you want to leave this page?');

	return (
		<HomeWrapper>
			<Outlet />
		</HomeWrapper>
	);
}
