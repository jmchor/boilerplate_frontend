import { Link, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../auth';

import { NavigationBar, NavigationButton, NavigationContainer, Subbar } from '../styles/NavbarStyles.js';
import { SidebarData, SidebarItem } from '../data/SidebarData.js';
import SubMenu from './SubMenu';
import styled from 'styled-components';

const ProfileImage = styled.img`
	width: 65px;
	height: 65px;
	padding: 1px;
	border-radius: 50%;
	background: white;
	border: 2px solid black;
	object-fit: cover;
`;

const EmptyImage = styled.div`
	width: 80px;
	height: 80px;
	padding: 10px;
	border-radius: 50%;
	background: none;
`;
function Navbar() {
	const auth = useAuth();
	const navigate = useNavigate();

	console.log('HERE', auth);

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
