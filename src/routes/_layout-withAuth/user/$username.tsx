import { createFileRoute } from '@tanstack/react-router';
import { useGetCurrentUser } from '../../../services/getCurrentUser.js';
import { CenteredDiv, FlexColumn, FlexRow } from '../../../styles/CreateProjectStyles.js';
import { useState } from 'react';
import styled from 'styled-components';
import ProjectList from '../../../components/cards/ProjectList.js';
import { Project } from '../../../types/project';
import { MoonLoader } from 'react-spinners';
import ArticleList from '../../../components/cards/ArticleList.js';
import { Article } from '../../../types/articles.js';
export const Route = createFileRoute('/_layout-withAuth/user/$username')({
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
	height: 100%;
	gap: 3rem;
	margin-top: 10rem;
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
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

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
`;

const Tabs = styled.div`
	width: 100%;
	margin: 3.5rem auto 1.5rem;
	padding: 2rem 1rem;
	border-radius: 2rem;
	@media (max-width: 769px) {
		padding: 2rem 0;
	}
`;

const TabsNavigation = styled.ul`
	width: 80%;
	margin: 2rem auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 2rem;
	padding-left: 0px;
	@media (max-width: 768px) {
		width: 90%;
	}

	li {
		width: 50%;
		padding: 0%.5;
		list-style: none;
		text-align: center;
		cursor: pointer;
		transition: all 0.7s;
		border-bottom-left-radius: 2rem;
		border-top-left-radius: 2rem;

		&:nth-child(3) {
			border-radius: 0;
			border-bottom-right-radius: 2rem;
			border-top-right-radius: 2rem;
		}

		&:nth-child(2) {
			border-radius: 0;
		}

		&:hover {
			background: rgba(103, 121, 221, 0.15);
			color: black;
		}

		&.active {
			background: var(--blue);
			color: white;
		}
	}
`;

function Profile() {
	const { data, error, loading } = useGetCurrentUser();
	const currentUser = data?.currentUser;
	console.log(currentUser);

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
					<ProfilePicture src={currentUser?.image as string} alt='' />
					<h2>{currentUser?.username}</h2>
				</FirstProfileRow>
				<hr />
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
							<>
								<ProjectList project={project as Project} /> <hr />
							</>
						))
					) : activeTab === 'articles' ? (
						currentUser?.articles?.map((article) => <ArticleList article={article as Article} />)
					) : (
						<ExtendedFlexRow>Settings</ExtendedFlexRow>
					)}
				</ProjectContainer>
			</Tabs>
		</ProfileWrapper>
	);
}
