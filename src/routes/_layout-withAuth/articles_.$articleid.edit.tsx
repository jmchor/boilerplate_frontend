import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout-withAuth/articles/$articleid/edit')({
	component: EditArticle,
});

function EditArticle() {
	return <div> Nothing here yet</div>;
}
