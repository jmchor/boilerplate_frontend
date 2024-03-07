import { createFileRoute } from '@tanstack/react-router';
import CreateArticleFormComponent from '../../../components/CreateArticleFormComponent';

export const Route = createFileRoute('/_layout-withAuth/articles/new')({
	component: CreateArticle,
});

function CreateArticle() {
	return (
		<>
			<CreateArticleFormComponent />
		</>
	);
}
