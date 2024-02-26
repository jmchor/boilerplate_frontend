import { Link, useNavigate } from '@tanstack/react-router';

import { useAuth } from '../auth';
import styled from 'styled-components';

const NavigationBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: none;
`;

const Subbar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

function Navbar() {
	const auth = useAuth();
	const navigate = useNavigate();

	return (
		<>
			<NavigationBar>
				<Subbar>
					<StyledLink
						to='/'
						activeProps={{
							className: 'font-bold',
						}}
						activeOptions={{ exact: true }}
					>
						Home
					</StyledLink>{' '}
					{auth.isLoggedIn && !auth.isLoggingOut && (
						<StyledLink
							to={'/dashboard'}
							activeProps={{
								className: 'font-bold',
							}}
						>
							Dashboard
						</StyledLink>
					)}
				</Subbar>
				{!auth.isLoggedIn ? (
					<StyledLink
						to={'/login'}
						activeProps={{
							className: 'font-bold',
						}}
					>
						Login
					</StyledLink>
				) : (
					<button
						onClick={() => {
							auth.setIsLoggingOut(true);

							navigate({
								to: '/login',
							});
						}}
					>
						Logout
					</button>
				)}
			</NavigationBar>
			<hr />
		</>
	);
}

export default Navbar;
