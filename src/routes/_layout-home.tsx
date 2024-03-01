import { Outlet, createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/_layout-home')({
	component: HomeLayoutComponent,
});

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

function HomeLayoutComponent() {
	return (
		<HomeWrapper className='home-wrapper'>
			<Outlet />
		</HomeWrapper>
	);
}
