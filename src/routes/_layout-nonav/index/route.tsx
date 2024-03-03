import { Link, createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { DiReact } from 'react-icons/di';

export const Route = createFileRoute('/_layout-nonav/')({
	component: Index,
});

const IndexPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 80%;
	h2 {
		margin: 0;
		text-align: center;
	}
`;

const IndexImage = styled.img`
	width: 100px;
	padding: 1.5rem;
	background: var(--radiantBluegrey);
	border-radius: 50%;
`;

const BoilerFrame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	height: 12rem;
	h1 {
		color: black;
		font-weight: 900;
		margin: 0;
		span {
			background-image: var(--Reversesteelbluegrey);
			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
			font-size: 8rem;
			font-weight: 800;
		}
	}
`;

const BoilerLink = styled(Link)`
	text-decoration: none;

	&:hover {
		cursor: pointer;
		text-decoration: none;
		transition: 0.2s ease-in-out;
		transform: scale(1.05);
	}
`;

const Footer = styled.div`
	p {
		margin: 0;
		text-align: center;
		font-size: 1.2rem;
		color: rgba(0, 0, 0, 0.3);
		margin-right: 10%;
	}
`;

const IconSpan = styled.span`
	position: relative;
	top: 7px;
	left: 5px;
	margin-left: -11px;
	margin-right: -2px;
`;

function Index() {
	return (
		<>
			<IndexPageWrapper>
				<BoilerLink to={'/home'}>
					<BoilerFrame>
						<IndexImage src='/static/boiler.svg' />
						<h1>
							<span>
								B
								<IconSpan>
									<DiReact color='#61DBFB' size='6rem' />
								</IconSpan>
								ilerplate
							</span>
						</h1>
					</BoilerFrame>
					<h2>Less Setup, More Code</h2>
				</BoilerLink>
			</IndexPageWrapper>
			<Footer>
				<p>(c) Johannes Chorzempa 2024</p>
			</Footer>
		</>
	);
}
