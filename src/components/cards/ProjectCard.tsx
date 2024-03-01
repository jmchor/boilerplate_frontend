import { Link } from '@tanstack/react-router';
import { CardContainer, MetaData, MetaDataWrapper, Title, ToolImage } from '../../styles/ProjectCardStyles';

const ProjectCard = ({ project }: any) => {
	function truncateText(text: string, maxLength: number): string {
		const words = text.split(' ');
		if (words.length > maxLength) {
			return words.slice(0, maxLength).join(' ') + '...';
		}
		return text;
	}
	const truncatedTitle = truncateText(project?.title, 5);

	return (
		<Link to={`/projects/${project?._id}`}>
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
		</Link>
	);
};
export default ProjectCard;
