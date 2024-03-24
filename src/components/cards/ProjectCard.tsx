import { CardContainer, MetaData, MetaDataWrapper, ProjectLink, Title } from '../../styles/ProjectCardStyles.js';
import { Project } from '../../types/project';
import StackImages, { ProjectForImages } from '../StackImages';

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
					<StackImages project={project as ProjectForImages} />
				</MetaDataWrapper>
				<MetaData>
					<p>
						<b>Created By</b> {project?.createdBy?.username}
					</p>
				</MetaData>
			</CardContainer>
		</ProjectLink>
	);
};
export default ProjectCard;
