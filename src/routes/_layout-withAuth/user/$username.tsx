import { createFileRoute, redirect } from '@tanstack/react-router';
import { useGetCurrentUser } from '../../../services/getCurrentUser.js';
import { CenteredDiv, FlexColumn, FlexRow } from '../../../styles/CreateProjectStyles.js';
import { useState } from 'react';
import styled from 'styled-components';
import ProjectList from '../../../components/cards/ProjectList.js';
import { Project } from '../../../types/project';
import { MoonLoader } from 'react-spinners';
import ArticleList from '../../../components/cards/ArticleList.js';
import { Article } from '../../../types/articles.js';
import { useAuth } from '../../../auth.js';
import UserSettings from '../../../components/UserSettings.js';
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

const ProjectContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 3rem;
	/* border: 1px solid #ccc;
	border-radius: 5px; */

	hr {
		border: 0;
		height: 1px;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
	}
`;

const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	gap: 3rem;
	margin-top: 10rem;
	/* border: 1px solid #ccc; */
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	background-color: white;
	border-radius: 5px;
`;

export const ExtendedFlexRow = styled(FlexRow)`
	width: 100%;
	flex: 0;
	justify-content: center;
	padding: 0 2rem;
	margin-bottom: 0;
	gap: 30%;
`;

const FirstProfileRow = styled(FlexRow)`
	width: 100%;
	flex: 0;
	margin-bottom: 0;
	justify-content: flex-start;
	padding: 0 2rem;
	height: 10rem;
`;

const ExtendedFlexColumn = styled(FlexColumn)`
	width: 100%;
	margin-bottom: -10rem;
	align-items: flex-start;
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */

	hr {
		width: 95%;
		height: 2px;
		margin: 0;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
	}
`;

const ProfilePicture = styled.img`
	width: 15rem;
	height: 15rem;
	border-radius: 50%;
	position: relative;
	top: -4rem;
	border: 2px double black;
	background-color: #898989;
	object-fit: cover;
`;

const Tabs = styled.div`
	width: 100%;
	margin: 2rem auto 1.5rem;
	padding: 0;
	border-radius: 2rem;
	@media (max-width: 769px) {
		padding: 2rem 0;
	}
`;

const TabsNavigation = styled.ul`
	margin-left: 3rem;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 4rem;
	border-radius: 2rem;
	padding-left: 0px;
	@media (max-width: 768px) {
		width: 90%;
	}

	li {
		list-style: none;
		text-align: center;
		cursor: pointer;

		&.active {
			color: var(--dirtypurple);
			border-bottom: 3px solid var(--dirtypurple);
		}
	}
`;

const BorderStyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

function Profile() {
	const { data, error, loading } = useGetCurrentUser();

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
		return <CenteredDiv>{error.message}</CenteredDiv>;
	}

	return (
		<ProfileWrapper>
			<ExtendedFlexColumn>
				<FirstProfileRow>
					<ProfilePicture src={currentUser?.imageUrl as string} alt='' />
					<h2>{currentUser?.username}</h2>
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
							<div key={project?._id}>
								<ProjectList key={project?._id} project={project as Project} />
							</div>
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
