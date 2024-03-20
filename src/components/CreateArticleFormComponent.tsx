import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { graphql } from 'gql.tada';
import { useMutation, useQuery } from '@apollo/client';
import { MoonLoader } from 'react-spinners';
import { MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useAuth } from '../auth.js';

import { CenteredDiv, CreateFormWrapper, CreateProjectForm, FlexRow } from '../styles/CreateProjectStyles.js';

import usePreventNavigation from '../lib/usePreventNavigation.js';
import { ArticleTagTypes } from '../types/articles.js';
import ImageUploader from './ImageUploads/ImageUploader.js';
import styled from 'styled-components';
import { ALL_TAGS_QUERY } from './SearchBar.js';

export const FlexBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	height: 100%;
	& > label {
		margin: 0;
		height: fit-content;
	}
`;

export const CustomSelect = styled(CreatableSelect)`
	padding-top: 0.5rem;
	width: 100%;
`;

export const CustomFlexRow = styled(FlexRow)`
	margin-bottom: 3rem;
	justify-content: space-between;
	gap: 4rem;
	& > label {
		margin: 0;
		width: fit-content;
	}
`;

const CREATE_ARTICLE = graphql(`
	mutation CREATE_ARTICLE($title: String!, $text: String!, $createdBy: ID!, $tags: [String]) {
		createArticle(title: $title, text: $text, createdBy: $createdBy, tags: $tags) {
			_id
			title
			text
			createdBy {
				_id
				username
			}
			subheadline
			tags
			imageUrl
		}
	}
`);

export const ExtendedQuill = styled(ReactQuill)`
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
	const [tags, setTags] = useState<string[]>([]);
	const [selectedOptions, setSelectedOptions] = useState<MultiValue<{ value: string; label: string }>>([]);
	// const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

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

	const {
		data: tagData,
		error: tagError,
		loading: tagLoading,
	} = useQuery(ALL_TAGS_QUERY, {
		fetchPolicy: 'network-only',
	});

	const allTags = tagData?.allTags;
	const allTagsArray = allTags?.map((tag) => ({ value: tag.tag, label: tag.tag }));

	const tagArray: string[] = [];

	selectedOptions?.forEach((option) => {
		tagArray.push(option.value as string);
	});

	const handleChange = (selectedOptions: MultiValue<{ value: string; label: string }>) => {
		setSelectedOptions(selectedOptions);
		setTags(selectedOptions.map((option) => option.value as string));
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
							<CustomSelect isMulti options={allTagsArray} defaultValue={selectedOptions} onChange={handleChange} />
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
