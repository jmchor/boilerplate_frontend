import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 270px;
	height: 220px;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 15px;
	background-color: #f5f5f5;
	box-shadow: 0 12px 24px 0 #4f7bc8ba;

	&:hover {
		box-shadow: 0 12px 24px 0 #4f7bc8fa;
	}
`;

const MetaDataWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	width: 80%;
	gap: 5px;
	padding: 5px;
`;

const ToolImage = styled.img`
	width: 4.5rem;
	height: 4.5rem;
	padding: 2px;
`;

const MetaData = styled.div`
	h5,
	p {
		margin: 0;
	}
`;

const Title = styled.div`
	h3 {
		margin: 0;
	}
`;

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
