import { createFileRoute } from '@tanstack/react-router';
import { HomePageWrapper } from '../../../styles/HomeRouteStyles';
import { SmallCenteredWrapper, StyledPaper, heights } from '../../../styles/HomeRouteStyles.js';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import ArticleCard from '../../../components/cards/ArticleCard.js';
import { Article } from '../../../types/articles.js';
import useGetArticles from '../../../services/getArticles.js';

export const Route = createFileRoute('/_layout-noAuth/articles')({
	component: AllArticles,
});

function AllArticles() {
	const { data, loading, error } = useGetArticles();

	const articles = data?.allArticles || [];
	return (
		<HomePageWrapper>
			<SmallCenteredWrapper className='articles'>
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
