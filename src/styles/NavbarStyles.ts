import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 15rem; /* Adjust the width as needed */
	height: 100%;
	overflow-y: auto; /* Add scroll if content overflows */

	//add box shadow only to the right border
	/* box-shadow: 5px 0 5px rgba(0, 0, 0, 0.54); */
	z-index: 1400;
	button {
		font-size: 1.7rem;
	}
`;

export const NavigationBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-decoration: none;
	width: 20rem;
	padding: 5rem 0;
	/* background: #ffffff17; */
`;

export const Subbar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
`;

export const NavigationButton = styled.button`
	background: none;
	width: 10rem;
	a {
		text-decoration: none;
		color: white;
	}
	&:hover {
		cursor: pointer;
	}
`;

export const DropdownLink = styled(Link)`
	height: 60px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	color: #f5f5f5;
	font-size: 18px;
	&:hover {
		cursor: pointer;
		text-decoration: none;
		transform: scale(1.1);
	}
`;

export interface DropdownContainerProps {
	isOpen: boolean;
}

export const DropdownContainer = styled.div<DropdownContainerProps>`
	width: 100%;
	background: rgba(0, 0, 0, 0.24);
	border-radius: 3px;
	transition: 0.8s ease-in-out; /* Added transition for height change */
	overflow: hidden; /* Hide overflow */
	max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; /* Toggle max-height based on isOpen state */
`;

export const ProfileImage = styled.img`
	width: 65px;
	height: 65px;
	padding: 1px;
	border-radius: 50%;
	background: white;
	border: 2px solid black;
	object-fit: cover;
`;

export const EmptyImage = styled.div`
	width: 80px;
	height: 80px;
	padding: 10px;
	border-radius: 50%;
	background: none;
`;
