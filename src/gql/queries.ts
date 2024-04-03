import { graphql } from 'gql.tada';

export const CURRENT_USER = graphql(`
	query CurrentUser {
		currentUser {
			username
			email
			imageUrl
			_id
			projects {
				title
				_id
				description
				articles {
					_id
				}
				frontend {
					framework
					gqlClient
				}
				backend {
					environment
					gqlServer
					database
					cms
				}
			}
			articles {
				title
				_id
				subheadline
				text
				tags
				imageUrl
			}
			likedArticles {
				title
				_id
				createdBy {
					username
					_id
				}
			}
		}
	}
`);

export const AUTH_CURRENT_USER = graphql(`
	query CurrentUser {
		currentUser {
			username
			email
			imageUrl
			_id
		}
	}
`);

export const CHECK_AUTHENTICATION = graphql(`
	query CheckAuthentication {
		checkAuthentication {
			cookieIsPresent
		}
	}
`);

export const ALL_PROJECTS = graphql(`
	query Projects($limit: Int) {
		allProjects(limit: $limit) {
			title
			description
			_id
			createdBy {
				username
			}
			frontend {
				framework
				gqlClient
			}
			backend {
				environment
				gqlServer
				cms
				database
			}
		}
	}
`);

export const ALL_TITLES_QUERY = graphql(`
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

export const All_ARTICLES_QUERY = graphql(`
	query Articles {
		allArticles {
			title
			subheadline
			text
			tags
			imageUrl
			externalLink
			linkedProjects {
				_id
				title
			}
			createdBy {
				username
				_id
			}
			_id
			createdAt
		}
	}
`);

export const SEARCH_PROJECT_QUERY = graphql(`
	query SEARCH_PROJECT_QUERY($title: String) {
		searchProject(title: $title)
	}
`);

export const SEARCH_ARTICLE_QUERY = graphql(`
	query SEARCH_ARTICLE_QUERY($title: String) {
		searchArticleByTitle(title: $title)
	}
`);

export const FIND_ARTICLE = graphql(`
	query FIND_ARTICLE($id: ID) {
		findArticle(_id: $id) {
			title
			text
			subheadline
			tags
			imageUrl
			externalLink
			linkedProjects {
				_id
				title
			}
			createdBy {
				_id
				username
			}
			_id
		}
	}
`);

export const FIND_PROJECT_QUERY = graphql(`
	query FindProject($id: ID) {
		findProject(_id: $id) {
			title
			description
			imageUrl
			frontend {
				framework
				gqlClient
				packages
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
				frontend
				backend
			}
			kanban {
				backlog {
					title
				}
				todo {
					title
				}
				doing {
					title
				}
				done {
					title
				}

				_id
			}
			articles {
				_id
				title
			}
			_id
			createdBy {
				_id
			}
		}
	}
`);

export const ARTICLE_TAG_QUERY = graphql(`
	query ARTICLE_TAG_QUERY($tag: String) {
		searchArticlesByTag(tag: $tag) {
			imageUrl
			title
			subheadline
			_id
			createdBy {
				username
			}
			tags
			createdAt
		}
	}
`);

export const PROJECT_TAG_QUERY = graphql(`
	query PROJECT_TAG_QUERY($tag: String) {
		searchProjectsByTag(tag: $tag) {
			_id
			title
			backend {
				environment
				moduleType
				gqlServer
				cms
				packages
				database
			}
			frontend {
				framework
				gqlClient
				packages
			}
			createdBy {
				username
			}
		}
	}
`);
