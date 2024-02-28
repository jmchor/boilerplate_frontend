import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { type AuthContext } from '../auth';
import Navbar from '../components/Navbar';
import GlobalStyles from '../styles/GlobalStyles';
import { Container, InnerStyles, LaptopScreenSize, Message, ScreenContainer } from '../styles/RootLayoutStyles';

interface MyRouterContext {
	auth: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: RootComponent,
	errorComponent: () => <div>Error</div>,
});

function RootComponent() {
	const isSmallScreen = window.innerWidth < LaptopScreenSize;
	return (
		<>
			<GlobalStyles />
			<ScreenContainer>
				{isSmallScreen ? '' : <Navbar />}
				<InnerStyles>
					{isSmallScreen ? (
						<Container>
							<Message>Please use a bigger screen</Message>
						</Container>
					) : (
						<Outlet />
					)}
				</InnerStyles>
			</ScreenContainer>

			<TanStackRouterDevtools position='bottom-right' initialIsOpen={false} />
		</>
	);
}
