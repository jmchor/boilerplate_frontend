import { useState } from 'react';
import { BsCaretDownSquare, BsCaretUpSquare } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

import { useNavigate } from '@tanstack/react-router';
import { Article } from '../../types/articles.js';
import { Button, Description, HeaderImage, PLFlexRow, TextStyles } from '../../styles/ArticleListStyles.js';

const ArticleList = ({ article }: { article: Article }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const navigate = useNavigate();

	const handleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<div>
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
					<TextStyles dangerouslySetInnerHTML={{ __html: article?.text }} />

					<p>Tags: {article?.tags?.map((tag: string) => `#${tag} `)}</p>
				</Description>
			)}
			<hr />
		</div>
	);
};
export default ArticleList;
