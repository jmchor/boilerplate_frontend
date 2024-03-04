import { createFileRoute } from '@tanstack/react-router';
import ProjectCard from '../../../components/cards/ProjectCard';
import useGetProjects from '../../../services/getProjects';
import { useState } from 'react';
import useGetArticles from '../../../services/getArticles';
import ArticleCard from '../../../components/cards/ArticleCard';
import {
	ArticleContainer,
	ContainerWithHeader,
	FilterContainer,
	HomePageWrapper,
	Image,
	LinkButton,
	MoreButton,
	OptionalContainer,
	ProjectGrid,
} from '../../../styles/HomeRouteStyles';
import { useAuth } from '../../../auth';
import { Project } from '../../../types/project';
import { Article } from '../../../types/articles';
import { MoonLoader } from 'react-spinners';
import styled from 'styled-components';

export const Route = createFileRoute('/_layout-noAuth/home')({
	component: Home,
});

function Home() {
	const [counts, setCounts] = useState<{ projects: number; articles: number }>({ projects: 2, articles: 3 });
	const [filter, setFilter] = useState<'projects' | 'articles' | 'all'>('all');

	const auth = useAuth();

	const { data: projectData, error: projectError, loading: projectLoading } = useGetProjects(5);
	const { data: articleData, error: articleError, loading: articleLoading } = useGetArticles();

	if (projectError || articleError) return <p>{projectError?.message || articleError?.message}</p>;

	const projects = projectData?.allProjects || [];
	const articles = articleData?.allArticles || [];

	const showMore = (type: 'projects' | 'articles') => {
		setCounts((prevCounts) => ({ ...prevCounts, [type]: prevCounts[type] + 2 }));
	};

	const handleFilterChange = (selectedFilter: 'projects' | 'articles' | 'all') => {
		setFilter(selectedFilter);
	};

	const LoadingContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		margin-top: 30rem;
	`;

	return (
		<HomePageWrapper>
			{projectLoading || articleLoading ? (
				<LoadingContainer>
					<MoonLoader color='var(--blue)' />
				</LoadingContainer>
			) : null}

			{!projectLoading && !articleLoading && (
				<FilterContainer>
					<LinkButton onClick={() => handleFilterChange('all')}>
						<Image src='/static/infinite.svg' alt='' active={filter === 'all'} />
					</LinkButton>
					<LinkButton onClick={() => handleFilterChange('projects')}>
						<Image src='/static/coding.svg' alt='' active={filter === 'projects'} />
					</LinkButton>
					<LinkButton onClick={() => handleFilterChange('articles')}>
						<Image src='/static/article.svg' alt='' active={filter === 'articles'} />
					</LinkButton>
				</FilterContainer>
			)}

			{!projectLoading && !articleLoading && auth.isLoggedIn ? (
				<OptionalContainer>
					<h1>Welcome back, {auth.user?.username}!</h1>
				</OptionalContainer>
			) : null}

			{(!projectLoading && filter === 'all') || (!projectLoading && filter === 'projects') ? (
				<ContainerWithHeader>
					<h2> Explore Recent Projects</h2>
					<ProjectGrid>
						{projects.slice(0, counts.projects).map((project) => (
							<ProjectCard key={project?._id} project={project as Project} />
						))}
						{projects.length > counts.projects ? (
							<MoreButton onClick={() => showMore('projects')}>See More</MoreButton>
						) : null}
					</ProjectGrid>
				</ContainerWithHeader>
			) : null}

			{(!articleLoading && filter === 'all') || (!articleLoading && filter === 'articles') ? (
				<ContainerWithHeader>
					<h2> Read the Newest Articles</h2>
					<ArticleContainer>
						{articles.slice(0, counts.articles).map((article) => (
							<ArticleCard key={article?._id} article={article as Article} />
						))}
						{articles.length > counts.articles ? (
							<MoreButton onClick={() => showMore('articles')}>See More</MoreButton>
						) : null}
					</ArticleContainer>
				</ContainerWithHeader>
			) : null}
		</HomePageWrapper>
	);
}
