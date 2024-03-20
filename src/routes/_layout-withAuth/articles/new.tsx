import { createFileRoute, redirect } from '@tanstack/react-router';
import CreateArticleFormComponent from '../../../components/CreateArticleFormComponent';

export const Route = createFileRoute('/_layout-withAuth/articles/new')({
	loader: ({ context }) => {
		if (!context.auth.cookieLoading && !context.auth.isLoggedIn) {
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
