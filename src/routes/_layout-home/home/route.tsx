import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { MoonLoader } from 'react-spinners';
import styled from 'styled-components';

import ProjectCard from '../../../components/cards/ProjectCard';
import ArticleCard from '../../../components/cards/ArticleCard';
import { useAuth } from '../../../auth';

import useGetProjects from '../../../services/getProjects.js';
import useGetArticles from '../../../services/getArticles.js';
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
} from '../../../styles/HomeRouteStyles.js';

import { Project } from '../../../types/project.js';
import { Article } from '../../../types/articles.js';
import SearchBar from '../../../components/SearchBar.js';

export const Route = createFileRoute('/_layout-home/home')({
	component: Home,
});

const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	margin-top: 30rem;
`;

function Home() {
	const auth = useAuth();

	return (
		<HomePageWrapper>
			{auth.isLoggedIn ? (
				<OptionalContainer>
					<h1>Welcome back, {auth.user?.username}!</h1>
				</OptionalContainer>
			) : null}

			<SearchBar />
		</HomePageWrapper>
	);
}
