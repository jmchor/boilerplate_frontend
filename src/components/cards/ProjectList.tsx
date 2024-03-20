import styled from 'styled-components';
import { FlexRow } from '../../styles/CreateProjectStyles.js';
import { Project } from '../../types/project';
import StackImages, { ProjectForImages } from '../StackImages';
import { useState } from 'react';
import { BsCaretDownSquare, BsCaretUpSquare, BsBoxArrowInUpRight } from 'react-icons/bs';
import { useNavigate } from '@tanstack/react-router';

export const PLFlexRow = styled(FlexRow)`
	width: 100%;
	flex: 0;
	margin-bottom: 0;

	& > div {
		flex: 1;
		display: flex;
		justify-content: flex-start;
	}

	h3 {
		margin: 0;
		padding-left: 2rem;
	}
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex: 0;
	p {
		margin: 0;
		padding: 1rem 2rem;
		text-align: justify;
		font-size: 1.1em;
	}
`;

export const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	width: fit-content;
`;

export const ImageRow = styled.div`
	flex: 1;
	display: flex;
	/* justify-content: flex-end !important; */
`;

export const ListStyles = styled.div``;

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
