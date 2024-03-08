import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { graphql } from 'gql.tada';
import { useMutation } from '@apollo/client';
import { MoonLoader } from 'react-spinners';
import Select, { MultiValue } from 'react-select';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useAuth } from '../auth.js';

import { CenteredDiv, CreateFormWrapper, CreateProjectForm, FlexRow } from '../styles/CreateProjectStyles.js';

import usePreventNavigation from '../lib/usePreventNavigation.js';
import { ArticleTagTypes } from '../types/articles.js';
import ImageUploader from './ImageUploads/ImageUploader.js';
import styled from 'styled-components';

const FlexBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	height: 100%;
	& > label {
		margin: 0;
		height: fit-content;
	}
`;

const CustomSelect = styled(Select)`
	padding-top: 0.5rem;
	width: 100%;
`;

const CustomFlexRow = styled(FlexRow)`
	margin-bottom: 3rem;
	justify-content: space-between;
	gap: 4rem;
	& > label {
		margin: 0;
		width: fit-content;
	}
`;

const CREATE_ARTICLE = graphql(`
	mutation CREATE_ARTICLE(
		$title: String!
		$text: String!
		$createdBy: ID!
		$subheadline: String
		$tags: [Tags]
		$imageUrl: String
	) {
		createArticle(
			title: $title
			text: $text
			createdBy: $createdBy
			subheadline: $subheadline
			tags: $tags
			imageUrl: $imageUrl
		) {
			_id
			title
			subheadline
			text
			createdBy {
				username
				_id
			}
			imageUrl
			tags
		}
	}
`);

const ExtendedQuill = styled(ReactQuill)`
	width: 100%;

	& .ql-editor {
		height: 25rem;
		font-weight: normal;
	}
`;
const CreateArticleFormComponent = () => {
	usePreventNavigation('Are you sure you want to leave this page?');

	const navigate = useNavigate();

	const { user } = useAuth();

	const [title, setTitle] = useState<string>('');
	const [text, setText] = useState<string>('');
	const [subheadline, setSubheadline] = useState<string>('');
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [tags, setTags] = useState<ArticleTagTypes[]>([]);
	const [selectedOptions, setSelectedOptions] = useState<MultiValue<{
		value: string;
		label: string;
	}> | null>(null);

	const [createArticle, { loading, error }] = useMutation(CREATE_ARTICLE, {
		variables: {
			title,
			createdBy: user?._id as string,
			text,
			subheadline,
			imageUrl,
			tags,
		},
	});

	const options = [
		{ value: 'database', label: 'database' },
		{ value: 'backend', label: 'backend' },
		{ value: 'frontend', label: 'frontend' },
		{ value: 'wordpress', label: 'wordpress' },
		{ value: 'keystone', label: 'keystone' },
		{ value: 'technical_writing', label: 'technical_writing' },
		{ value: 'blog', label: 'blog' },
		{ value: 'graphql', label: 'graphql' },
		{ value: 'validation', label: 'validation' },
		{ value: 'tests', label: 'tests' },
		{ value: 'no_sql', label: 'no_sql' },
		{ value: 'sql', label: 'sql' },
		{ value: 'misc', label: 'misc' },
		{ value: 'react', label: 'react' },
		{ value: 'typescript', label: 'typescript' },
		{ value: 'programming', label: 'programming' },
		{ value: 'software_engineering', label: 'software_engineering' },
		{ value: 'wiki', label: 'wiki' },
		{ value: 'deployment', label: 'deployment' },
	];

	const tagArray: ArticleTagTypes[] = [];

	selectedOptions?.forEach((option) => {
		tagArray.push(option.value as ArticleTagTypes);
	});

	const handleChange = (selectedOptions: MultiValue<{ value: string; label: string }>) => {
		setSelectedOptions(selectedOptions);
		setTags(selectedOptions.map((option) => option.value as ArticleTagTypes));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const { data } = await createArticle({
			variables: {
				title,
				createdBy: user?._id as string,
				text,
				subheadline,
				imageUrl,
				tags,
			},
		}).catch(console.error);

		if (data?.createArticle) {
			navigate({ to: `/articles/${data.createArticle._id}` as string });
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
			<h1>Create Article</h1>
			<CreateProjectForm onSubmit={handleSubmit}>
				<label htmlFor='title'>
					Title
					<input type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
				</label>

				<label htmlFor=' subheadline'>
					Subheadline
					<input
						type='text'
						id='subheadline'
						name='subheadline'
						value={subheadline}
						onChange={(e) => setSubheadline(e.target.value)}
					/>
				</label>
				<CustomFlexRow>
					<label htmlFor='image'>
						{' '}
						Hero Image
						<ImageUploader id='image' setImageUrl={setImageUrl} />
					</label>
					<FlexBox>
						<label htmlFor='tags'>
							Tags
							<CustomSelect
								id='tags'
								defaultValue={selectedOptions}
								onChange={handleChange}
								options={options}
								placeholder='Select Tags'
								isMulti
								isSearchable
							/>
						</label>
						<label htmlFor='text'>
							Text
							<ExtendedQuill theme='snow' value={text} onChange={setText} />
						</label>
					</FlexBox>
				</CustomFlexRow>

				<button type='submit' disabled={loading}>
					Create Article
				</button>
			</CreateProjectForm>
		</CreateFormWrapper>
	);
};
export default CreateArticleFormComponent;
