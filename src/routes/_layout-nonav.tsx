import { Outlet, createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/_layout-nonav')({
	beforeLoad: ({ context }) => {
		context.auth.setWithNav(false);
	},
	component: NoNavLayoutComponent,
});

const NoNavWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin-right: 20rem;
`;

function NoNavLayoutComponent() {
	return (
		<NoNavWrapper className='index-wrapper'>
			<Outlet />
		</NoNavWrapper>
	);
}
