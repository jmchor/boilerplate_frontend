import styled from 'styled-components';
import { Project } from '../../types/project';
import StackImages, { ProjectForImages } from '../StackImages';
import { useState } from 'react';
import { BsCaretDownSquare, BsCaretUpSquare, BsBoxArrowInUpRight } from 'react-icons/bs';
import { useNavigate } from '@tanstack/react-router';
import { Button, Description, PLFlexRow } from '../../styles/ArticleListStyles.js';
import { ListStyles } from '../../styles/LinkComponentStyles.js';

export const ImageRow = styled.div`
	flex: 1;
	display: flex;
`;

const ProjectList = ({ project }: { project: Project }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const navigate = useNavigate();

	const handleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<ListStyles>
			<PLFlexRow>
				<div>
					<h3>{project?.title}</h3>
				</div>
				<ImageRow>
					<StackImages project={project as ProjectForImages} />
				</ImageRow>
				<Button onClick={handleExpand}>
					{isExpanded ? <BsCaretUpSquare color='black' /> : <BsCaretDownSquare color='black' />}
				</Button>
				<Button onClick={() => navigate({ to: `/projects/${project?._id}` as string })}>
					<BsBoxArrowInUpRight color='black' />
				</Button>
			</PLFlexRow>
			{isExpanded && (
				<Description>
					<p>{project?.description}</p>
				</Description>
			)}
			<hr />
		</ListStyles>
	);
};
export default ProjectList;
