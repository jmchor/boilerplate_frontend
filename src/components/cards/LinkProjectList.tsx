import { PLFlexRow } from '../../styles/ArticleListStyles.js';
import { ImageRowForLinks, ListStyles } from '../../styles/LinkComponentStyles.js';
import { Project } from '../../types/project';
import StackImages, { ProjectForImages } from '../StackImages';

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
