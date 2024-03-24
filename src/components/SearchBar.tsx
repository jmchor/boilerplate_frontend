import { useNavigate } from '@tanstack/react-router';
import TextField from '@mui/material/TextField';

import { graphql } from 'gql.tada';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useAuth } from '../auth';
import {
	ButtonContainer,
	CustomAutocomplete,
	GroupHeader,
	GroupItems,
	SearchBarStyles,
} from '../styles/SearchbarStyles.js';

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

const SearchBar = () => {
	const [newOptions, setNewOptions] = useState<object[]>([]);
	const [selectedOption, setSelectedOption] = useState<object | null>(null);

	const navigate = useNavigate();

	const { user } = useAuth();

	const allRoutes = [{ title: 'User Profile', type: 'route', route: `/user/${user?.username}` }];

	const [searchProject, { data: projectData, error: projectError, loading: projectLoading }] = useLazyQuery(
		SEARCH_PROJECT_QUERY,
		{
			fetchPolicy: 'network-only',
		}
	);

	const [searchArticle, { data: articleData, error: articleError, loading: articleLoading }] = useLazyQuery(
		SEARCH_ARTICLE_QUERY,
		{
			fetchPolicy: 'network-only',
		}
	);

	const { data, error, loading } = useQuery(ALL_TITLES_QUERY, {
		fetchPolicy: 'network-only',
	});

	const allTitles = data?.allTitles;

	const {
		data: tagData,
		error: tagError,
		loading: tagLoading,
	} = useQuery(ALL_TAGS_QUERY, {
		fetchPolicy: 'network-only',
	});

	const allTags = tagData?.allTags;

	useEffect(() => {
		if (data && tagData) {
			const sortedOptions = [...allTitles, ...allTags, ...allRoutes]?.sort((a, b) => a?.type?.localeCompare(b?.type));
			setNewOptions(sortedOptions);
		}
	}, [data, tagData, allTitles, allTags]);

	const handleSearch = (value: object) => {
		if (value?.type === 'project') {
			searchProject({ variables: { title: value?.title } });
		} else if (value?.type === 'article') {
			searchArticle({ variables: { title: value?.title } });
		} else if (value?.type === 'tag') {
			navigate({ to: `/search?query=${value?.tag}` as string });
		} else if (value?.type === 'route') {
			navigate({ to: value?.route as string });
		}
	};

	if (projectData?.searchProject) {
		navigate({ to: `/projects/${projectData?.searchProject}` as string });
	} else if (articleData?.searchArticleByTitle) {
		navigate({ to: `/articles/${articleData?.searchArticleByTitle}` as string });
	}

	const handleButtonClick = () => {
		if (selectedOption) {
			handleSearch(selectedOption);
		}
	};

	const handleRandomButtonClick = () => {
		const randomIndex = Math.floor(Math.random() * newOptions.length);
		const randomOption = newOptions[randomIndex];
		handleSearch(randomOption);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleButtonClick();
		}
	};

	const handleOptionSelected = (option: object | null) => {
		setSelectedOption(option); // Update selected option when an option is selected in Autocomplete
	};

	return (
		<SearchBarStyles>
			<CustomAutocomplete
				id='grouped-demo'
				freeSolo
				onChange={(event, value) => handleOptionSelected(value)}
				options={newOptions}
				isOptionEqualToValue={(option, value) => option.title === value.title || option.tag === value.tag}
				groupBy={(option) => option.type}
				getOptionLabel={(option) => option.title || option.tag}
				sx={{ width: 600 }}
				renderInput={(params) => <TextField sx={{ fontSize: '1.5rem' }} {...params} onKeyPress={handleKeyPress} />}
				renderGroup={(params) => (
					<li key={params.key}>
						<GroupHeader>{params.group}</GroupHeader>
						<GroupItems>{params.children}</GroupItems>
					</li>
				)}
			/>
			<ButtonContainer>
				<button onClick={handleButtonClick}>Search</button>
				<button onClick={handleRandomButtonClick}>Random</button>
			</ButtonContainer>
		</SearchBarStyles>
	);
};
export default SearchBar;
