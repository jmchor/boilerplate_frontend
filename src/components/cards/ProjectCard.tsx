import {
	CardContainer,
	MetaData,
	MetaDataWrapper,
	ProjectLink,
	Title,
	ToolImage,
} from '../../styles/ProjectCardStyles';
import { Project } from '../../types/project';

const ProjectCard = ({ project }: { project: Project }) => {
	function truncateText(text: string, maxLength: number): string {
		let words: string[] = [];
		if (text) {
			words = text.split(' ');
		}
		if (words.length > maxLength) {
			return words.slice(0, maxLength).join(' ') + '...';
		}
		return text;
	}
	const truncatedTitle = truncateText(project?.title, 5);

	return (
		<ProjectLink to={`/projects/${project?._id}`}>
			<CardContainer>
				<Title>
					<h3>{truncatedTitle}</h3>
				</Title>
				<MetaDataWrapper>
					{project?.frontend?.framework === 'reactts' && <ToolImage src='../../../static/react.svg' />}
					{project?.backend?.environment === 'nodets' && <ToolImage src='../../../static/node.svg' />}
					{project?.backend?.gqlServer && <ToolImage src='../../../static/graphql.svg' />}
					{project?.frontend?.framework === 'reactts' && <ToolImage src='../../../static/ts.svg' />}
					{project?.backend?.database === 'mongodb' && <ToolImage src='../../../static/mongo.svg' />}
				</MetaDataWrapper>
				<MetaData>
					<p>
						{' '}
						<b>Created By</b> {project?.createdBy?.username}
					</p>
				</MetaData>
			</CardContainer>
		</ProjectLink>
	);
};
export default ProjectCard;
