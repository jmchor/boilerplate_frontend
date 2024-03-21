import { createFileRoute } from '@tanstack/react-router';

import SearchBar from '../../../components/SearchBar.js';
import { HomePageWrapper, OptionalContainer, ProjectGrid } from '../../../styles/HomeRouteStyles.js';
import { useAuth } from '../../../auth.js';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

import useGetArticles from '../../../services/getArticles.js';
import ArticleCard from '../../../components/cards/ArticleCard.js';
import { Article } from '../../../types/articles.js';

export const Route = createFileRoute('/_layout-home/home')({
	component: Home,
});

export const heights: number[] = [300, 330, 360, 390, 420, 450, 480, 510, 540, 570];

export const StyledPaper = styled(Paper)`
	text-align: center;
`;

export const CenteredWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: auto;
	margin-top: 20rem;
	color: white;
	background-color: none;
`;

export const SmallCenteredWrapper = styled.div`
	margin-top: 10rem;
`;

function Home() {
	const auth = useAuth();

	const { data, loading, error } = useGetArticles();

	const articles = data?.allArticles || [];

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
			<HomePageWrapper className='home'>
				<SmallCenteredWrapper>
					{articles && (
						<Box sx={{ width: '100%', minHeight: '100vh' }}>
							<Masonry columns={3} spacing={1}>
								{articles.map((article, index: number) => (
									<StyledPaper key={index} sx={{ height: heights[index] }}>
										<ArticleCard key={article?._id} article={article as Article} />
									</StyledPaper>
								))}
							</Masonry>
						</Box>
					)}
				</SmallCenteredWrapper>
			</HomePageWrapper>
		);
	}
}
