import { createFileRoute } from '@tanstack/react-router';
import { DiReact } from 'react-icons/di';
import {
	BoilerFrame,
	BoilerLink,
	Footer,
	IconSpan,
	IndexImage,
	IndexPageWrapper,
} from '../../../styles/IndexStyles.js';

export const Route = createFileRoute('/_layout-nonav/')({
	component: Index,
});

function Index() {
	return (
		<>
			<IndexPageWrapper>
				<BoilerLink to={'/home'}>
					<BoilerFrame>
						<IndexImage src='/boiler.svg' />
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

				<a href='https://www.freepik.com/free-vector/gradient-hexagonal-background_13955212.htm#query=svg%20background&position=22&from_view=keyword&track=ais&uuid=38ae1ebb-b087-4bcc-addc-508afa6900a4'>
					Background Image by coolvector
				</a>
			</Footer>
		</>
	);
}
