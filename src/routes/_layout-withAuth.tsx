import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';
import styled from 'styled-components';
import { useAuth } from '../auth';

export const Route = createFileRoute('/_layout-withAuth')({
	loader: ({ context }) => {
		if (!context.auth.cookieLoading && !context.auth.isLoggedIn) {
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

	@media screen and (min-width: 2000px) {
		justify-content: center;
	}
`;

function WithAuthComponent() {
	const { setWithNav, cookieThere } = useAuth();

	const auth = useAuth();

	console.log(auth);
	console.log('COOKIE THERE', cookieThere);
	setWithNav(true);
	return (
		<Wrapper>
			<Outlet />
		</Wrapper>
	);
}
