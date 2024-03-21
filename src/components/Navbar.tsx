import { Link, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../auth';

import {
	EmptyImage,
	NavigationBar,
	NavigationButton,
	NavigationContainer,
	ProfileImage,
	Subbar,
} from '../styles/NavbarStyles.js';
import { SidebarData, SidebarItem } from '../data/SidebarData.js';
import SubMenu from './SubMenu';

function Navbar() {
	const auth = useAuth();
	const navigate = useNavigate();

	return (
		<NavigationContainer>
			<NavigationBar>
				<Subbar>
					<Link to='/home'>
						{auth.user?.imageUrl && auth.isLoggedIn ? (
							<ProfileImage src={auth.user?.imageUrl} alt='' />
						) : (
							<EmptyImage />
						)}
					</Link>
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
