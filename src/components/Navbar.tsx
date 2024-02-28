import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '../auth';

import { NavigationBar, NavigationButton, NavigationContainer, Subbar } from '../styles/NavbarStyles';
import { SidebarData, SidebarItem } from '../data/SidebarData';
import SubMenu from './SubMenu';

function Navbar() {
	const auth = useAuth();
	const navigate = useNavigate();

	return (
		<NavigationContainer>
			<NavigationBar>
				<Subbar>
					{SidebarData.map((item: SidebarItem) => {
						return <SubMenu item={item} key={item.title} />;
					})}
				</Subbar>
				{!auth.isLoggedIn ? (
					<NavigationButton onClick={() => navigate({ to: '/login' })}>Sign In</NavigationButton>
				) : (
					<NavigationButton
						onClick={() => {
							auth.setIsLoggingOut(true);
							navigate({
								to: '/login',
							});
						}}
					>
						Sign Out
					</NavigationButton>
				)}
			</NavigationBar>
		</NavigationContainer>
	);
}

export default Navbar;
