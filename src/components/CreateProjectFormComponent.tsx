import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { graphql } from 'gql.tada';
import { useMutation } from '@apollo/client';
import Switch from '@mui/material/Switch';
import { MoonLoader } from 'react-spinners';

import {
	BackendEnvironment,
	BackendPackages,
	Cms,
	Database,
	FrontendFramework,
	Modules,
} from '../types/createProject.js';
import { useAuth } from '../auth.js';

import {
	CenteredDiv,
	CreateFormWrapper,
	CreateProjectForm,
	FlexColumn,
	FlexRow,
} from '../styles/CreateProjectStyles.js';

import usePreventNavigation from '../lib/usePreventNavigation.js';

const CREATE_PROJECT = graphql(`
	mutation CREATE_PROJECT(
		$title: String!
		$createdBy: ID!
		$frontend: FrontendConfigInput!
		$backend: BackendConfigInput!
		$description: String
	) {
		createProject(
			title: $title
			createdBy: $createdBy
			frontend: $frontend
			backend: $backend
			description: $description
		) {
			title
			description
			createdBy {
				_id
				username
			}
			frontend {
				framework
				gqlClient
			}
			backend {
				environment
				moduleType
				gqlServer
				cms
				packages
				database
			}
			installScripts {
				backend
				frontend
			}
			kanban {
				_id
			}
			articles {
				_id
			}
			_id
		}
	}
`);

const CreateProjectFormComponent = () => {
	usePreventNavigation('Are you sure you want to leave this page?');

	const navigate = useNavigate();

	const { user } = useAuth();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [frontendFramework, setFrontendFramework] = useState<FrontendFramework>(undefined);
	const [frontendGqlClient, setFrontendGqlClient] = useState<boolean>(false);
	const [backendEnvironment, setBackendEnvironment] = useState<BackendEnvironment>(undefined);
	const [backendModuleType, setBackendModuleType] = useState<Modules>(undefined);
	const [backendCms, setBackendCms] = useState<Cms>(undefined);
	const [backendPackages, setBackendPackages] = useState<BackendPackages[]>([]);
	const [backendDatabase, setBackendDatabase] = useState<Database>(undefined);

	const backPacks = ['jsonwebtoken', 'cors', 'bcryptjs', 'dotenv', 'nodemon'];

	// const [frontendPackages, setFrontendPackages] = useState<FrontendPackages[]>([]);

	const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
		variables: {
			title,
			createdBy: user?._id as string,
			frontend: {
				framework: frontendFramework,
				gqlClient: frontendGqlClient,
			},
			backend: {
				environment: backendEnvironment,
				moduleType: backendModuleType,
				gqlServer: frontendGqlClient,
				cms: backendCms,
				packages: backendPackages,
				database: backendDatabase,
			},
			description,
		},
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const { data } = await createProject({
			variables: {
				title,
				description,
				createdBy: user?._id as string,
				frontend: {
					framework: frontendFramework,
					gqlClient: frontendGqlClient,
				},
				backend: {
					environment: backendEnvironment,
					moduleType: backendModuleType,
					gqlServer: frontendGqlClient,
					cms: backendCms,
					packages: backendPackages,
					database: backendDatabase,
				},
			},
		}).catch(console.error);

		if (data.createProject) {
			navigate({ to: `/projects/${data.createProject._id}` as string });
		}
	};

	if (loading) {
		return (
			<CenteredDiv>
				<MoonLoader color='var(--blue)' />
			</CenteredDiv>
		);
	}

	return (
		<CreateFormWrapper>
			<h1>Create Project</h1>
			<CreateProjectForm onSubmit={handleSubmit}>
				<label htmlFor='title'>
					Title
					<input type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
				</label>
				<label htmlFor='description'>
					Description
					<textarea
						id='description'
						name='description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<FlexRow>
					<FlexColumn>
						<label htmlFor='frontendFramework'>
							Frontend
							<select
								id='frontendFramework'
								name='frontend.framework'
								value={frontendFramework as string}
								onChange={(e) => setFrontendFramework(e.target.value as FrontendFramework)}
							>
								<option value=''>Select Framework</option>
								<option value='reactts'>React with TypeScript</option>
								<option value='reactjs'>React</option>
								<option value='vanillajs'>JavaScript</option>
								<option value='nextjs'>NextJS</option>
							</select>
						</label>
						<label htmlFor='backendEnvironment'>
							Backend
							<select
								id='backendEnvironments'
								name='backend.environment'
								value={backendEnvironment as string}
								onChange={(e) => setBackendEnvironment(e.target.value as BackendEnvironment)}
							>
								<option value=''>Select Environment</option>
								<option value='nodets'>Node with TypeScript</option>
								<option value='nodejs'>NodeJS</option>
								<option value='nodeExpressTS'>Node & Exrepss with TypeScript</option>
								<option value='nodeExpressJS'>NodeJS & Express</option>
							</select>
						</label>
						<label htmlFor='backendModuleType'>
							Module Type
							<select
								id='backendModuleType'
								name='backend.moduleType'
								value={backendModuleType as string}
								onChange={(e) => setBackendModuleType(e.target.value as Modules)}
							>
								<option value=''>Select Module Type</option>
								<option value='module'>Module</option>
								<option value='commonjs'>CommonJS</option>
							</select>
						</label>
						<label htmlFor='backendCms'>
							CMS
							<select
								id='backendCms'
								name='backend.cms'
								value={backendCms as string}
								onChange={(e) => setBackendCms(e.target.value as Cms)}
							>
								<option value=''>Select CMS</option>
								<option value='keystoneJS'>Keystone JS</option>
								<option value='strapi'>Strapi</option>
							</select>
						</label>
						<label htmlFor='backendDatabase'>
							Database
							<select
								id='backendDatabase'
								name='backend.database'
								value={backendDatabase as string}
								onChange={(e) => setBackendDatabase(e.target.value as Database)}
							>
								<option value=''>Select Database</option>
								<option value='postgres'>PostgreSQL</option>
								<option value='mongodb'>MongoDB</option>
							</select>
						</label>
					</FlexColumn>
					<FlexRow>
						<FlexColumn>
							<label htmlFor='frontendGqlClient'>
								GraphQL
								<Switch
									type='checkbox'
									id='frontendGqlClient'
									name='frontend.gqlClient'
									checked={frontendGqlClient}
									onChange={(e) => setFrontendGqlClient(e.target.checked)}
									inputProps={{ 'aria-label': 'controlled' }}
								/>
							</label>
						</FlexColumn>
						<FlexColumn>
							{backPacks.map((item) => (
								<div key={item}>
									<label>{item === 'jsonwebtoken' ? 'jwt' : item}</label>
									<Switch
										checked={backendPackages.includes(item as BackendPackages)}
										onChange={(e) => {
											if (e.target.checked) {
												setBackendPackages([...backendPackages, item] as BackendPackages[]);
											} else {
												setBackendPackages(backendPackages.filter((pkg) => pkg !== item));
											}
										}}
										inputProps={{ 'aria-label': 'controlled' }}
									/>
								</div>
							))}
						</FlexColumn>
					</FlexRow>
				</FlexRow>

				<button type='submit' disabled={loading}>
					Create Project
				</button>
			</CreateProjectForm>
		</CreateFormWrapper>
	);
};
export default CreateProjectFormComponent;
