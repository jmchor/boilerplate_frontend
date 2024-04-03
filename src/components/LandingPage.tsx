import ProjectCard from '../components/cards/ProjectCard';
import ArticleCard from '../components/cards/ArticleCard';

import {
	ArticleGrid,
	ContainerWithHeader,
	HomePageWrapper,
	ProjectGrid,
	StyledPaper,
	heights,
} from '../styles/HomeRouteStyles.js';

import { Project } from '../types/project.js';
import { Article } from '../types/articles.js';
import { Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

const LandingPage = ({ projects, articles }: { projects: Project[]; articles: Article[] }) => {
	return (
		<HomePageWrapper>
			{projects && (
				<ContainerWithHeader>
					<ProjectGrid>
						{projects.map((project) => (
							<ProjectCard key={project?._id} project={project as Project} />
						))}
					</ProjectGrid>
				</ContainerWithHeader>
			)}

			{/* {articles && (
				<ContainerWithHeader>
					<ArticleGrid>
						{articles.map((article) => (
							<ArticleCard key={article?._id} article={article as Article} />
						))}
					</ArticleGrid>
				</ContainerWithHeader>
			)} */}
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
		</HomePageWrapper>
	);
};
export default LandingPage;
