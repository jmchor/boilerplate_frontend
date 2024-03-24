import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router';
import { graphql } from 'gql.tada';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { MoonLoader } from 'react-spinners';
import { MultiValue } from 'react-select';
import { FIND_ARTICLE } from './articles/$articleid';
import { CenteredDiv, CreateFormWrapper, CreateProjectForm } from '../../styles/CreateProjectStyles.js';
import { useAuth } from '../../auth';
import 'react-quill/dist/quill.snow.css';
import { CustomFlexRow, CustomSelect, ExtendedQuill, FlexBox } from '../../components/CreateArticleFormComponent';
import ImageUploader from '../../components/ImageUploads/ImageUploader';
import { ALL_TAGS_QUERY } from '../../components/SearchBar';

export const Route = createFileRoute('/_layout-withAuth/articles/$articleid/edit')({
	component: EditArticle,
});

const EDIT_ARTICLE = graphql(`
	mutation EDIT_ARTICLE(
		$id: ID!
		$createdBy: ID!
		$title: String
		$text: String
		$subheadline: String
		$tags: [String]
		$imageUrl: String
		$externalLink: String
	) {
		editArticle(
			_id: $id
			createdBy: $createdBy
			title: $title
			text: $text
			subheadline: $subheadline
			tags: $tags
			imageUrl: $imageUrl
			externalLink: $externalLink
		) {
			title
			text
			tags
			subheadline
			linkedProjects {
				_id
				title
			}
			imageUrl
			externalLink
			_id
		}
	}
`);

function EditArticle() {
	const articleId = useParams({
		from: '/_layout-withAuth/articles/$articleid/edit',
		select: (params) => params.articleid,
	});

	const { user } = useAuth();
	const [isUserCreator, setIsUserCreator] = useState<boolean>(false);
	const [title, setTitle] = useState<string>('');
	const [text, setText] = useState<string>('');
	const [subheadline, setSubheadline] = useState<string>('');
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [tags, setTags] = useState<string[]>([]);
	const [selectedOptions, setSelectedOptions] = useState<MultiValue<{ value: string; label: string }>>([]);
	const [externalLink, setExternalLink] = useState<string>('');
	const navigate = useNavigate();

	const { data, loading, error } = useQuery(FIND_ARTICLE, {
		variables: {
			id: articleId,
		},
		fetchPolicy: 'network-only',
	});

	const [editArticle, { loading: editArticleLoading, error: editArticleError }] = useMutation(EDIT_ARTICLE, {
		variables: {
			id: articleId,
			createdBy: data?.findArticle?.createdBy?._id as string,
			title,
			text,
			subheadline,
			tags,
			imageUrl,
			externalLink,
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

	useEffect(() => {
		setTitle(data?.findArticle?.title as string);
		setText(data?.findArticle?.text as string);
		setSubheadline(data?.findArticle?.subheadline as string);
		setImageUrl(data?.findArticle?.imageUrl as string);
		setTags(data?.findArticle?.tags as string[]);
		setSelectedOptions(
			data?.findArticle?.tags?.map((tag) => ({ value: tag, label: tag })) as MultiValue<{
				value: string;
				label: string;
			}>
		);

		if (user?._id === data?.findArticle?.createdBy?._id) {
			setIsUserCreator(true);
		}
	}, [
		user?._id,
		data?.findProject?.createdBy?._id,
		data?.findProject?.description,
		data?.findProject?.title,
		data?.findArticle?.tags,
		data?.findArticle?.title,
		data?.findArticle?.text,
		data?.findArticle?.subheadline,
		data?.findArticle?.imageUrl,
		data?.findArticle?.createdBy?._id,
	]);

	console.log('selectedOptions', selectedOptions);

	if (loading || editArticleLoading) {
		return (
			<CenteredDiv>
				<MoonLoader color='var(--blue)' />
			</CenteredDiv>
		);
	}

	if (error || editArticleError) {
		return (
			<CenteredDiv>
				<h1>Error: {error.message}</h1>
			</CenteredDiv>
		);
	}

	if (!isUserCreator) {
		return (
			<CenteredDiv>
				<h1>You are not authorized to edit this project</h1>
			</CenteredDiv>
		);
	}

	const handleChange = (selectedOptions: MultiValue<{ value: string; label: string }>) => {
		setSelectedOptions(selectedOptions);
		setTags(selectedOptions.map((option) => option.value as string));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const res = await editArticle();

		if (res) {
			navigate({ to: `/articles/${articleId}` as string });
		}
	};

	return (
		<CreateFormWrapper>
			<h1>Edit Article</h1>
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
						<ImageUploader id='image' setImageUrl={setImageUrl} existingImage={data?.findArticle?.imageUrl} />
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
					Confirm Changes
				</button>
			</CreateProjectForm>
		</CreateFormWrapper>
	);
}
