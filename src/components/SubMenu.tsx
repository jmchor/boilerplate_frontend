import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { DropdownContainer, DropdownLink, NavigationButton } from '../styles/NavbarStyles.js';
import { SidebarItem } from '../data/SidebarData.js';
import { useAuth } from '../auth';

const SubMenu = ({ item }: { item: SidebarItem }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	const navigate = useNavigate();

	const auth = useAuth();

	return (
		<>
			{item?.path === '/user/$username' ? (
				// Render special button for "/user/$username" path
				<NavigationButton onClick={() => navigate({ to: `/user/${auth.user?.username}` as string })}>
					{item.title}
				</NavigationButton>
			) : item?.path ? (
				// Render standard button for other paths
				<NavigationButton onClick={() => navigate({ to: item.path })}>{item.title}</NavigationButton>
			) : (
				// Render button with just a title if path doesn't exist
				<NavigationButton onClick={item.subNav && showSubnav}>
					<span>{item.title}</span>
				</NavigationButton>
			)}

			<DropdownContainer isOpen={subnav}>
				{subnav &&
					item?.subNav?.map((item) => {
						return (
							<DropdownLink to={item.path} key={item.title} onClick={() => setSubnav(!subnav)}>
								<span>{item.title}</span>
							</DropdownLink>
						);
					})}
			</DropdownContainer>
		</>
	);
};

export default SubMenu;
