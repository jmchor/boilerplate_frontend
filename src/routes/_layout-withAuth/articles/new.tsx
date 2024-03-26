import { createFileRoute, redirect } from '@tanstack/react-router';
import CreateArticleFormComponent from '../../../components/CreateArticleFormComponent';

export const Route = createFileRoute('/_layout-withAuth/articles/new')({
	loader: ({ context }) => {
		if (context.auth.cookieLoading === false && context.auth.isLoggedIn === false) {
			throw redirect({
				to: '/login',
			});
		}
	},
	component: CreateArticle,
});

function CreateArticle() {
	return (
		<>
			<CreateArticleFormComponent />
		</>
	);
}
