import { createFileRoute, redirect } from '@tanstack/react-router';
import { useGetCurrentUser } from '../../../services/getCurrentUser.js';
import { CenteredDiv } from '../../../styles/CreateProjectStyles.js';
import { useState } from 'react';
import ProjectList from '../../../components/cards/ProjectList.js';
import { Project } from '../../../types/project';
import { MoonLoader } from 'react-spinners';
import ArticleList from '../../../components/cards/ArticleList.js';
import { Article } from '../../../types/articles.js';
import UserSettings from '../../../components/UserSettings.js';
import {
	BorderStyledDiv,
	ExtendedFlexColumn,
	ExtendedFlexRow,
	FirstProfileRow,
	ProfilePicture,
	ProfileWrapper,
	ProjectContainer,
	ProjectListContainer,
	Tabs,
	TabsNavigation,
} from '../../../styles/UserProfileStyles.js';
export const Route = createFileRoute('/_layout-withAuth/user/$username')({
	beforeLoad: ({ context }) => {
		if (!context.auth.isLoading && !context.auth.isLoggedIn) {
			throw redirect({
				to: '/login',
			});
		}
	},
	component: Profile,
});

function Profile() {
	const { data, error, loading, startPolling, stopPolling } = useGetCurrentUser();
	startPolling(10);
	setTimeout(() => {
		stopPolling();
	}, 1000);

	const currentUser = data?.currentUser;

	const [activeTab, setActiveTab] = useState('projects');

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	if (loading) {
		return (
			<CenteredDiv>
				<MoonLoader color='var(--blue)' />
			</CenteredDiv>
		);
	}

	if (error) {
		return <CenteredDiv>{error?.message}</CenteredDiv>;
	}

	console.log(currentUser?.projects);

	return (
		<ProfileWrapper>
			<ExtendedFlexColumn>
				<FirstProfileRow>
					<ProfilePicture src={currentUser?.imageUrl as string} alt='' />
					<h1>{currentUser?.username}</h1>
				</FirstProfileRow>
				<BorderStyledDiv>
					<hr />
				</BorderStyledDiv>
				<TabsNavigation>
					<li className={activeTab === 'projects' ? 'active' : ''} onClick={() => handleTabClick('projects')}>
						Projects
					</li>
					<li className={activeTab === 'articles' ? 'active' : ''} onClick={() => handleTabClick('articles')}>
						Articles
					</li>
					<li className={activeTab === 'settings' ? 'active' : ''} onClick={() => handleTabClick('settings')}>
						Settings
					</li>
				</TabsNavigation>
			</ExtendedFlexColumn>

			<Tabs>
				<ProjectContainer>
					{activeTab === 'projects' ? (
						currentUser?.projects?.map((project) => (
							<ProjectListContainer key={project?._id}>
								<ProjectList key={project?._id} project={project as Project} />
							</ProjectListContainer>
						))
					) : activeTab === 'articles' ? (
						currentUser?.articles?.map((article) => <ArticleList key={article?._id} article={article as Article} />)
					) : (
						<ExtendedFlexRow>
							<UserSettings />
						</ExtendedFlexRow>
					)}
				</ProjectContainer>
			</Tabs>
		</ProfileWrapper>
	);
}
