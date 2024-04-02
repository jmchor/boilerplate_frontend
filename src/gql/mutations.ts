import { graphql } from 'gql.tada';

export const CREATE_ARTICLE = graphql(`
	mutation CREATE_ARTICLE(
		$title: String!
		$text: String!
		$createdBy: ID!
		$tags: [String]
		$imageUrl: String
		$subheadline: String
		$externalLink: String
	) {
		createArticle(
			title: $title
			text: $text
			createdBy: $createdBy
			tags: $tags
			imageUrl: $imageUrl
			subheadline: $subheadline
			externalLink: $externalLink
		) {
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
			externalLink
		}
	}
`);

export const CREATE_PROJECT = graphql(`
	mutation CREATE_PROJECT(
		$title: String!
		$createdBy: ID!
		$frontend: FrontendConfigInput!
		$backend: BackendConfigInput!
		$description: String
		$imageUrl: String
	) {
		createProject(
			title: $title
			createdBy: $createdBy
			frontend: $frontend
			backend: $backend
			description: $description
			imageUrl: $imageUrl
		) {
			title
			description
			imageUrl
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

export const LOGIN = graphql(`
	mutation Login($credentials: LoginInput!) {
		login(credentials: $credentials) {
			value
			isAuthenticated
		}
	}
`);

export const LOGOUT = graphql(`
	mutation Logout {
		logout {
			loggedOut
		}
	}
`);
export const SIGNUP_MUTATION = graphql(`
	mutation CreateUser($email: String!, $username: String!, $password: String!) {
		createUser(email: $email, username: $username, password: $password) {
			_id
			email
			username
		}
	}
`);

export const EDIT_USER = graphql(`
	mutation EDIT_USER($id: ID!, $username: String, $email: String, $imageUrl: String) {
		editUser(_id: $id, username: $username, email: $email, imageUrl: $imageUrl) {
			username
			email
			imageUrl
		}
	}
`);

export const EDIT_ARTICLE = graphql(`
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

export const DELETE_ARTICLE = graphql(`
	mutation DELETE_ARTICLE($id: ID!, $createdBy: ID!) {
		deleteArticle(_id: $id, createdBy: $createdBy)
	}
`);

export const LINK_ARTICLE_TO_PROJECT = graphql(`
	mutation LinkArticleToProject($id: ID!, $projectId: ID!) {
		linkArticleToProject(_id: $id, projectId: $projectId) {
			_id
			title
			linkedProjects {
				_id
				title
			}
		}
	}
`);

export const EDIT_PROJECT = graphql(`
	mutation EDIT_PROJECT($id: ID!, $createdBy: ID!, $description: String, $title: String, $imageUrl: String) {
		editProject(_id: $id, createdBy: $createdBy, description: $description, title: $title, imageUrl: $imageUrl) {
			title
			description
			imageUrl
		}
	}
`);

export const DELETE_PROJECT = graphql(`
	mutation DELETE_PROJECT($id: ID!, $createdBy: ID!) {
		deleteProject(_id: $id, createdBy: $createdBy)
	}
`);

export const DELETE_USER = graphql(`
	mutation DELETE_USER($id: ID!, $password: String!) {
		deleteUser(_id: $id, password: $password)
	}
`);

export const UPDATE_PASSWORD = graphql(`
	mutation UPDATE_PASSWORD($id: ID!, $oldPassword: String!, $newPassword: String!) {
		updatePassword(_id: $id, oldPassword: $oldPassword, newPassword: $newPassword) {
			username
			_id
		}
	}
`);
