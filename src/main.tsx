import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

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
	uri: 'http://localhost:4000/graphql',
	credentials: 'include',
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});
ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<AuthProvider>
				<InnerApp />
			</AuthProvider>
		</ApolloProvider>
	</StrictMode>
);
