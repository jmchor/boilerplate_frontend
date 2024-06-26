import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import Switch from '@mui/material/Switch';
import { MoonLoader } from 'react-spinners';
import { MultiValue } from 'react-select';

import {
	BackendEnvironment,
	BackendPackages,
	Cms,
	Database,
	FrontendFramework,
	FrontendPackages,
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
import ImageUploader from './ImageUploads/ImageUploader.js';
import { CREATE_PROJECT } from '../gql/mutations.js';
import { CustomSelect } from '../styles/CreateArticleStyles.js';

const CreateProjectFormComponent = () => {
	usePreventNavigation('Are you sure you want to leave this page?');

	const navigate = useNavigate();

	const { user } = useAuth();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
	const [frontendFramework, setFrontendFramework] = useState<FrontendFramework>(undefined);
	const [frontendGqlClient, setFrontendGqlClient] = useState<boolean>(false);
	const [backendEnvironment, setBackendEnvironment] = useState<BackendEnvironment>(undefined);
	const [backendModuleType, setBackendModuleType] = useState<Modules>(undefined);
	const [backendCms, setBackendCms] = useState<Cms>(undefined);
	const [backendPackages, setBackendPackages] = useState<BackendPackages[]>([]);
	const [backendDatabase, setBackendDatabase] = useState<Database>(undefined);
	const [selectedOptions, setSelectedOptions] = useState<MultiValue<{ value: string; label: string }>>([]);
	const [frontendPacks, setFrontendPacks] = useState<FrontendPackages[]>([]);
	const [selectedFrontendOptions, setSelectedFrontendOptions] = useState<MultiValue<{ value: string; label: string }>>(
		[]
	);

	// const backPacks = ['jsonwebtoken', 'cors', 'bcryptjs', 'dotenv', 'nodemon'];

	const frontEndOptions = [
		{ value: 'styled_components', label: 'Styled Components' },
		{ value: 'mui_material', label: 'MUI Material' },
		{ value: 'emotion_react', label: 'Emotion for React' },
		{ value: 'emotion_styled', label: 'Emotion Styled' },
		{ value: 'stylex', label: 'StyleX' },
	];

	const backPackOptions = [
		{ value: 'jsonwebtoken', label: 'JSON Web Token' },
		{ value: 'cors', label: 'CORS' },
		{ value: 'bcryptjs', label: 'BCrypt' },
		{ value: 'dotenv', label: 'Dotenv' },
		{ value: 'nodemon', label: 'Nodemon' },
	];

	const handleBackendChange = (selectedOptions: MultiValue<{ value: string; label: string }>) => {
		setSelectedOptions(selectedOptions);
		setBackendPackages(selectedOptions.map((option) => option.value as BackendPackages));
	};

	const handleFrontendChange = (selectedFrontendOptions: MultiValue<{ value: string; label: string }>) => {
		setSelectedFrontendOptions(selectedFrontendOptions);
		setFrontendPacks(selectedFrontendOptions.map((option) => option.value as FrontendPackages));
	};

	// const [frontendPackages, setFrontendPackages] = useState<FrontendPackages[]>([]);

	const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
		variables: {
			title,
			createdBy: user?._id as string,
			frontend: {
				framework: frontendFramework,
				gqlClient: frontendGqlClient,
				packages: frontendPacks,
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
			imageUrl,
		},
	});

	useEffect(() => {
		console.log(imageUrl);
	}, [imageUrl]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { data } = await createProject({
			variables: {
				title,
				description,
				imageUrl,
				createdBy: user?._id as string,
				frontend: {
					framework: frontendFramework,
					gqlClient: frontendGqlClient,
					packages: frontendPacks,
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

	if (error) {
		return (
			<CenteredDiv>
				<h1>Error: {error.message}</h1>
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
					<label htmlFor='image'>
						{' '}
						Hero Image
						<ImageUploader id='image' setImageUrl={setImageUrl} />
					</label>
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
								<option value='nextts'>NextJS with TypeScript</option>
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
								<option value='nodeExpressTS'>Node & Express with TypeScript</option>
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
					<FlexRow className='form-flex'>
						<FlexColumn>
							<label htmlFor='frontend'>
								Frontend Packages
								<CustomSelect
									isMulti
									options={frontEndOptions}
									defaultValue={selectedFrontendOptions}
									onChange={handleFrontendChange}
								/>
							</label>
							<label htmlFor='backend'>
								Backend Packages
								<CustomSelect
									isMulti
									options={backPackOptions}
									defaultValue={selectedOptions}
									onChange={handleBackendChange}
								/>
							</label>
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
						{/* <FlexColumn>
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
						</FlexColumn> */}
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
