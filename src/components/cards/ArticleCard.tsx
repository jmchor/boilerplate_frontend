import { CardContainer, MetaData, TagLine, Title, TitleImage } from '../../styles/ArticleStyles.js';
import { ProjectLink } from '../../styles/ProjectCardStyles.js';
import { Article } from '../../types/articles.js';

const ArticleCard = ({ article }: { article: Article }) => {
	function formatDate(isoDateString: string): string {
		const date = new Date(isoDateString);
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
		return date.toLocaleDateString('en-US', options);
	}

	return (
		<ProjectLink to={`/articles/${article?._id}`}>
			<CardContainer>
				<TitleImage src={article?.imageUrl} alt='article image' />
				<Title>
					<h2>{article.title}</h2>
					<h4>{article.subheadline}</h4>
				</Title>
				<MetaData>
					<p>
						<b>Created By</b> {article?.createdBy?.username} on {formatDate(article?.createdAt)}
					</p>
				</MetaData>
				<TagLine>
					{article?.tags?.map((tag: string) => (
						<p key={tag}>
							<i>#{tag}</i>
						</p>
					))}
				</TagLine>
			</CardContainer>
		</ProjectLink>
	);
};
export default ArticleCard;
