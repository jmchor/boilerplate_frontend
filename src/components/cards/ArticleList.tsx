import styled from 'styled-components';
import { FlexRow } from '../../styles/CreateProjectStyles.js';
import { useState } from 'react';
import { BsCaretDownSquare, BsCaretUpSquare } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

import { useNavigate } from '@tanstack/react-router';
import { Article } from '../../types/articles.js';

const PLFlexRow = styled(FlexRow)`
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

const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	width: fit-content;
`;

const HeaderImage = styled.img`
	width: 100%;
	object-fit: cover;
	padding: 2rem;
`;

const ListStyles = styled.div``;

const ArticleList = ({ article }: { article: Article }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const navigate = useNavigate();

	const handleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<ListStyles>
			<PLFlexRow>
				<div>
					<h3>{article?.title}</h3>
				</div>

				<Button onClick={handleExpand}>
					{isExpanded ? <BsCaretUpSquare color='black' /> : <BsCaretDownSquare color='black' />}
				</Button>
				<Button onClick={() => navigate({ to: `/articles/${article?._id}/edit` as string })}>
					<FiEdit color='black' />
				</Button>
			</PLFlexRow>
			{isExpanded && (
				<Description>
					<HeaderImage src={article?.imageUrl} />
					<h5>{article?.subheadline}</h5>
					<p>{article?.text}</p>
				</Description>
			)}
			<hr />
		</ListStyles>
	);
};
export default ArticleList;
