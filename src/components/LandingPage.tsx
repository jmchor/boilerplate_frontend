import ProjectCard from '../components/cards/ProjectCard';
import ArticleCard from '../components/cards/ArticleCard';

import { ArticleGrid, ContainerWithHeader, HomePageWrapper, ProjectGrid } from '../styles/HomeRouteStyles.js';

import { Project } from '../types/project.js';
import { Article } from '../types/articles.js';

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

			{articles && (
				<ContainerWithHeader>
					<ArticleGrid>
						{articles.map((article) => (
							<ArticleCard key={article?._id} article={article as Article} />
						))}
					</ArticleGrid>
				</ContainerWithHeader>
			)}
		</HomePageWrapper>
	);
};
export default LandingPage;
