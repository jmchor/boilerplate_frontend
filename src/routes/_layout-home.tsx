import { Outlet, createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { useAuth } from '../auth';
import usePreventNavigation from '../lib/usePreventNavigation.js';

export const Route = createFileRoute('/_layout-home')({
	component: HomeLayoutComponent,
});

export const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 0 auto;

	@media screen and (min-width: 2000px) {
		justify-content: center;
	}
`;

function HomeLayoutComponent() {
	const { setWithNav } = useAuth();

	const auth = useAuth();

	console.log(auth);

	setWithNav(true);

	usePreventNavigation('Are you sure you want to leave this page?');

	return (
		<HomeWrapper>
			<Outlet />
		</HomeWrapper>
	);
}
