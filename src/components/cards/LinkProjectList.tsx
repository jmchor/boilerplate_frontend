import styled from 'styled-components';
import { Project } from '../../types/project';
import StackImages, { ProjectForImages } from '../StackImages';
import { PLFlexRow } from './ProjectList.js';

const ImageRowForLinks = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end !important;
`;

const ListStyles = styled.div`
	height: 100%;
	box-shadow: 0px 0px 8px 0 rgba(255, 255, 255, 0.294);
	padding: 1rem;
	margin-top: 1rem;
`;

const LinkProjectList = ({ project }: { project: Project }) => {
	return (
		<ListStyles>
			<PLFlexRow>
				<div>
					<h3>{project?.title}</h3>
				</div>
				<ImageRowForLinks>
					<StackImages project={project as ProjectForImages} />
				</ImageRowForLinks>
			</PLFlexRow>
		</ListStyles>
	);
};
export default LinkProjectList;
