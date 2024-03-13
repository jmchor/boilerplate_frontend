import { createFileRoute, useParams } from '@tanstack/react-router';
import { useFindProject } from '../../../services/findProject';
import KanbanBoard from '../../../components/Kanban/KanbanBoard';
import { HomePageWrapper } from '../../../styles/HomeRouteStyles';

export const Route = createFileRoute('/_layout-withAuth/projects/$projectid')({
	component: Project,
});

function Project() {
	const projectId = useParams({ from: '/_layout-withAuth/projects/$projectid', select: (p) => p.projectid });

	const { data, loading } = useFindProject(projectId);
	const kanban = data?.findProject?.kanban;

	return (
		<HomePageWrapper>
			<h1>Project</h1>
			<KanbanBoard kanbanId={kanban?._id} />
		</HomePageWrapper>
	);
}
