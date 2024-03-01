import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 40vw;
	height: 50vh;
	text-overflow: ellipsis;
	background-color: #f5f5f5;
	box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.26);
	&:hover {
		box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.54);
	}
`;

const TagLine = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	gap: 2rem;
	padding: 2rem;
	p {
		margin: 0;
	}
`;

const TitleImage = styled.img`
	width: 100%;
	height: 50%;
	object-fit: fill;
`;

const MetaData = styled.div`
	h5,
	p {
		margin: 0;
	}
`;

const Title = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h2,
	h4 {
		margin: 0;
	}
`;

const ArticleCard = ({ article }: any) => {
	function formatDate(isoDateString: string): string {
		const date = new Date(isoDateString);
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
		return date.toLocaleDateString('en-US', options);
	}

	return (
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
	);
};
export default ArticleCard;
