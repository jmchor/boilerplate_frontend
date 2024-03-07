import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { graphql } from 'gql.tada';
import { useMutation } from '@apollo/client';
import Switch from '@mui/material/Switch';
import { MoonLoader } from 'react-spinners';

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
	height: 300px;
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

const allTags = [
	'database',
	'backend',
	'frontend',
	'wordpress',
	'keystone',
	'technical_writing',
	'blog',
	'graphql',
	'validation',
	'tests',
	'no_sql',
	'sql',
	'misc',
	'react',
	'typescript',
	'programming',
	'software_engineering',
	'wiki',
	'deployment',
];

const CreateArticleFormComponent = () => {
	usePreventNavigation('Are you sure you want to leave this page?');

	const navigate = useNavigate();

	const { user } = useAuth();

	const [title, setTitle] = useState<string>('');
	const [text, setText] = useState<string>('');
	const [subheadline, setSubheadline] = useState<string>('');
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [tags, setTags] = useState<ArticleTagTypes[]>([]);

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

		if (data.createProject) {
			navigate({ to: `/articles/${data.createArticle._id}` as string });
		}
	};

	useEffect(() => {
		console.log(imageUrl);
	}, [imageUrl]);

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

				<label htmlFor='subheadline'>
					Subheadline
					<input
						type='text'
						id='subheadline'
						name='subheadline'
						value={subheadline}
						onChange={(e) => setSubheadline(e.target.value)}
					/>
				</label>
				<label htmlFor='text'>
					Text
					<textarea id='text' name='text' value={text} onChange={(e) => setText(e.target.value)} />
				</label>
				<FlexRow>
					<ImageUploader setImageUrl={setImageUrl} />
					<FlexBox>
						{allTags.map((item) => (
							<div key={item}>
								<label>{item}</label>
								<Switch
									checked={tags.includes(item as ArticleTagTypes)}
									onChange={(e) => {
										if (e.target.checked) {
											setTags([...tags, item] as ArticleTagTypes[]);
										} else {
											setTags(tags.filter((pkg) => pkg !== item));
										}
									}}
									inputProps={{ 'aria-label': 'controlled' }}
								/>
							</div>
						))}
					</FlexBox>
				</FlexRow>

				<button type='submit' disabled={loading}>
					Create Project
				</button>
			</CreateProjectForm>
		</CreateFormWrapper>
	);
};
export default CreateArticleFormComponent;
