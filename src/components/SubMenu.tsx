import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { DropdownContainer, DropdownLink, NavigationButton } from '../styles/NavbarStyles';
import { SidebarItem } from '../data/SidebarData';

const SubMenu = ({ item }: { item: SidebarItem }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	const navigate = useNavigate();

	return (
		<>
			{item?.path ? (
				<NavigationButton onClick={() => navigate({ to: item.path })}>{item.title}</NavigationButton>
			) : (
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
