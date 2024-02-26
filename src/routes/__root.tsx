import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import styled from 'styled-components';

import { type AuthContext } from '../auth';
import Navbar from '../components/Navbar';
import GlobalStyles from '../styles/GlobalStyles';

interface MyRouterContext {
	auth: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: RootComponent,
	errorComponent: () => <div>Error</div>,
});

const InnerStyles = styled.div`
	/* Inner styles */
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Message = styled.h1`
	font-size: 24px;
`;

const LaptopScreenSize = 50;

function RootComponent() {
	const isSmallScreen = window.innerWidth < LaptopScreenSize;
	return (
		<>
			<GlobalStyles />
			<Navbar />

			<InnerStyles>
				{isSmallScreen ? (
					<Container>
						<Message>Please use a bigger screen</Message>
					</Container>
				) : (
					<Outlet />
				)}
			</InnerStyles>

			<TanStackRouterDevtools position='bottom-right' initialIsOpen={false} />
		</>
	);
}
