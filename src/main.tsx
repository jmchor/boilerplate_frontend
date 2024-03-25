import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { StyleSheetManager } from 'styled-components';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { AuthProvider, useAuth } from './auth';
import NProgress from 'nprogress';
import './styles/nprogress.css';

// Create a new router instance
const router = createRouter({
	routeTree,
	defaultPreload: 'intent',
	context: {
		auth: undefined!,
	},
});

const GRAPHQL_SERVER = import.meta.env.VITE_GRAPHQL_SERVER;

router.subscribe('onBeforeLoad', () => NProgress.start());
router.subscribe('onLoad', () => NProgress.done());

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

export const InnerApp = () => {
	const auth = useAuth();

	return <RouterProvider router={router} context={{ auth }} />;
};

const link = createUploadLink({
	uri: GRAPHQL_SERVER,
	credentials: 'include',
});

const cache = new InMemoryCache({
	typePolicies: {
		Kanban: {
			fields: {
				backlog: {
					merge(existing = [], incoming) {
						// Merge the existing backlog with the incoming backlog
						return [...existing, ...incoming];
					},
				},
				todo: {
					merge(existing = [], incoming) {
						// Merge the existing todo with the incoming todo
						return [...existing, ...incoming];
					},
				},
				doing: {
					merge(existing = [], incoming) {
						// Merge the existing doing with the incoming doing
						return [...existing, ...incoming];
					},
				},
				done: {
					merge(existing = [], incoming) {
						// Merge the existing done with the incoming done
						return [...existing, ...incoming];
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	cache: cache,
	link: link,
});
ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StyleSheetManager shouldForwardProp={(prop) => prop !== 'isOpen'}>
			<ApolloProvider client={client}>
				<AuthProvider>
					<InnerApp />
				</AuthProvider>
			</ApolloProvider>
		</StyleSheetManager>
	</StrictMode>
);
