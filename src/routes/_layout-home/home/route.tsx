import { createFileRoute } from '@tanstack/react-router';

import SearchBar from '../../../components/SearchBar.js';
import {
	CenteredWrapper,
	HomePageWrapper,
	OptionalContainer,
	SmallCenteredWrapper,
	StyledPaper,
	heights,
} from '../../../styles/HomeRouteStyles.js';
import { useAuth } from '../../../auth.js';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import useGetArticles from '../../../services/getArticles.js';
import ArticleCard from '../../../components/cards/ArticleCard.js';
import { Article } from '../../../types/articles.js';

export const Route = createFileRoute('/_layout-home/home')({
	component: Home,
});

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
