import { createFileRoute } from '@tanstack/react-router';

import SearchBar from '../../../components/SearchBar.js';
import { HomePageWrapper, OptionalContainer } from '../../../styles/HomeRouteStyles.js';
import { useAuth } from '../../../auth.js';
import styled from 'styled-components';
import { CenteredDiv } from '../../../styles/CreateProjectStyles.js';
import { MoonLoader } from 'react-spinners';

export const Route = createFileRoute('/_layout-home/home')({
	component: Home,
});

const CenteredWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: auto;
	margin-top: 20rem;
	color: white;
	background-color: none;
`;

function Home() {
	const auth = useAuth();
	console.log(auth);

	if (auth.isLoggedIn && auth.user?.username) {
		return (
			<HomePageWrapper>
				<CenteredWrapper>
					<OptionalContainer>
						<h1>Welcome back, {auth.user?.username}!</h1>
					</OptionalContainer>
					<SearchBar />
				</CenteredWrapper>
			</HomePageWrapper>
		);
	} else {
		return (
			<HomePageWrapper>
				<CenteredWrapper>
					<SearchBar />
				</CenteredWrapper>
			</HomePageWrapper>
		);
	}
}
