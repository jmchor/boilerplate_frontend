import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { useAuth, type AuthContext } from '../auth';

interface MyRouterContext {
	auth: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: RootComponent,
});

function RootComponent() {
	const auth = useAuth();
	return (
		<>
			<div className='p-2 flex gap-2 text-lg'>
				<Link
					to='/'
					activeProps={{
						className: 'font-bold',
					}}
					activeOptions={{ exact: true }}
				>
					Home
				</Link>{' '}
				{auth.isLoggedIn && !auth.isLoggingOut && (
					<Link
						to={'/dashboard'}
						activeProps={{
							className: 'font-bold',
						}}
					>
						Dashboard
					</Link>
				)}
				{!auth.isLoggedIn ? (
					<Link
						to={'/login'}
						activeProps={{
							className: 'font-bold',
						}}
					>
						Login
					</Link>
				) : (
					<button
						onClick={() => {
							auth.setIsLoggingOut(true);
						}}
					>
						Logout
					</button>
				)}
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools position='bottom-right' initialIsOpen={false} />
		</>
	);
}
