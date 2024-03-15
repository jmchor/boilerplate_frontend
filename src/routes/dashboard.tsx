import { Link, createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useAuth } from '../auth';
import styled from 'styled-components';
import { graphql } from 'gql.tada';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/dashboard')({
	beforeLoad: ({ context }) => {
		console.log(context);
		if (!context.auth.isLoggedIn || (!context.auth.isLoading && !context.auth.isLoggedIn)) {
			throw redirect({
				to: '/login',
			});
		}
	},
	component: RenderGroup,
});

const GroupHeader = styled.div`
	position: sticky;
	top: -8px;
	padding: 4px 10px;
	color: black;
	background-color: white;
	font-size: 1.5rem;
	&::first-letter {
		text-transform: capitalize;
	}
`;

const GroupItems = styled.ul`
	padding: 0;
	font-size: 1.5rem;
`;

const CustomAutocomplete = styled(Autocomplete)`
	label,
	input {
		font-size: 1.5rem;
	}
`;

const ALL_TITLES_QUERY = graphql(`
	query ALL_TITLES_QUERY {
		allTitles {
			title
			type
		}
	}
`);

export const ALL_TAGS_QUERY = graphql(`
	query ALL_TAGS_QUERY {
		allTags {
			tag
			type
		}
	}
`);

const SEARCH_PROJECT_QUERY = graphql(`
	query SEARCH_PROJECT_QUERY($title: String) {
		searchProject(title: $title)
	}
`);

const SEARCH_ARTICLE_QUERY = graphql(`
	query SEARCH_ARTICLE_QUERY($title: String) {
		searchArticleByTitle(title: $title)
	}
`);

function RenderGroup() {
	//make queries happen and stuff their return values into arrays

	const [newOptions, setNewOptions] = useState<object[]>([]);

	const navigate = useNavigate();

	const [searchProject, { data: projectData, error: projectError, loading: projectLoading }] =
		useLazyQuery(SEARCH_PROJECT_QUERY);

	const [searchArticle, { data: articleData, error: articleError, loading: articleLoading }] =
		useLazyQuery(SEARCH_ARTICLE_QUERY);

	const [searchArticleByTag, { data: articleByTagData, error: articleByTagError, loading: articleByTagLoading }] =
		useLazyQuery(SEARCH_ARTICLE_QUERY);

	const { data, error, loading } = useQuery(ALL_TITLES_QUERY);

	const allTitles = data?.allTitles;

	const { data: tagData, error: tagError, loading: tagLoading } = useQuery(ALL_TAGS_QUERY);

	const allTags = tagData?.allTags;

	useEffect(() => {
		if (data && tagData) {
			const sortedOptions = [...allTitles, ...allTags]?.sort((a, b) => a?.type?.localeCompare(b?.type));
			setNewOptions(sortedOptions);
		}
	}, [data, tagData, allTitles, allTags]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>, value: object) => {
		if (value?.type === 'project') {
			searchProject({ variables: { title: value?.title } });
		} else if (value?.type === 'article') {
			searchArticle({ variables: { title: value?.title } });
		} else if (value?.type === 'tag') {
			navigate({ to: `/search?query=${value?.tag}` as string });
		}
	};

	if (projectData?.searchProject) {
		navigate({ to: `/projects/${projectData?.searchProject}` as string });
	} else if (articleData?.searchArticleByTitle) {
		navigate({ to: `/articles/${articleData?.searchArticleByTitle}` as string });
	}

	return (
		<div>
			<CustomAutocomplete
				id='grouped-demo'
				onChange={handleSearch}
				options={newOptions}
				isOptionEqualToValue={(option, value) => option.title === value.title}
				groupBy={(option) => option.type}
				getOptionLabel={(option) => option.title || option.tag}
				sx={{ width: 600, fontSize: '1.5rem' }}
				renderInput={(params) => <TextField sx={{ fontSize: '1.5rem' }} {...params} label='Search' />}
				renderGroup={(params) => (
					<li key={params.key}>
						<GroupHeader>{params.group}</GroupHeader>
						<GroupItems>{params.children}</GroupItems>
					</li>
				)}
			/>
			<Link
				to='/search'
				search={{
					query: 'tanstack',
				}}
			>
				Search
			</Link>
		</div>
	);
}
