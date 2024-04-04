import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { MoonLoader } from 'react-spinners';
import { MultiValue } from 'react-select';
import { FIND_ARTICLE } from '../../gql/queries';
import { CenteredDiv, CreateFormWrapper, CreateProjectForm, FlexRow } from '../../styles/CreateProjectStyles.js';
import { useAuth } from '../../auth';
import 'react-quill/dist/quill.snow.css';
import { CustomFlexRow, CustomSelect, ExtendedQuill, FlexBox } from '../../styles/CreateArticleStyles.js';
import ImageUploader from '../../components/ImageUploads/ImageUploader';
import { ALL_TAGS_QUERY } from '../../gql/queries';
import { DeleteButton } from '../../styles/UserDeleteStyles.js';
import { DELETE_ARTICLE, EDIT_ARTICLE } from '../../gql/mutations.js';

export const Route = createFileRoute('/_layout-withAuth/articles/$articleid/edit')({
	component: EditArticle,
});

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

	const [deleteArticle, { loading: deleteArticleLoading, error: deleteArticleError }] = useMutation(DELETE_ARTICLE, {
		variables: {
			id: articleId,
			createdBy: data?.findArticle?.createdBy?._id as string,
		},
	});

	useEffect(() => {
		setTitle(data?.findArticle?.title as string);
		setText(data?.findArticle?.text as string);
		setSubheadline(data?.findArticle?.subheadline as string);
		setImageUrl(data?.findArticle?.imageUrl as string);
		setTags(data?.findArticle?.tags as string[]);
		setExternalLink(data?.findArticle?.externalLink as string);
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
		data?.findArticle?.linkedProjects,
		data?.findArticle?.tags,
		data?.findArticle?.title,
		data?.findArticle?.text,
		data?.findArticle?.subheadline,
		data?.findArticle?.imageUrl,
		data?.findArticle?.createdBy?._id,
		data?.findArticle?.externalLink,
	]);

	if (loading || editArticleLoading || deleteArticleLoading || tagLoading) {
		return (
			<CenteredDiv>
				<MoonLoader color='var(--blue)' />
			</CenteredDiv>
		);
	}

	if (error || editArticleError || deleteArticleError || tagError) {
		return (
			<CenteredDiv>
				<h1>Error: {error?.message}</h1>
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

	const handleDelete = async () => {
		console.log('articleId', articleId);
		if (window.confirm('Are you sure you want to delete this article?')) {
			const res = await deleteArticle();
			if (res) {
				navigate({ to: '/articles' as string });
			}
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
				<label htmlFor='externalLink'>
					External Link
					<input
						type='text'
						id='externalLink'
						name='externalLink'
						value={externalLink}
						onChange={(e) => setExternalLink(e.target.value)}
					></input>
				</label>

				<CustomFlexRow>
					<label htmlFor='image'>
						{' '}
						Hero Image
						<ImageUploader id='image' setImageUrl={setImageUrl} existingImage={data?.findArticle?.imageUrl as string} />
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

				<FlexRow>
					<button type='submit' disabled={loading}>
						Confirm Changes
					</button>
					<DeleteButton type='button' onClick={handleDelete}>
						Delete Article
					</DeleteButton>
				</FlexRow>
			</CreateProjectForm>
		</CreateFormWrapper>
	);
}
