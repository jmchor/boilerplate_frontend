import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/_layout-noAuth/about')({
	component: About,
});

const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	width: 60%;
	height: 100%;
	text-align: justify;
	margin-top: 10rem;

	h1,
	p {
		margin: 0;
	}

	button {
		cursor: pointer;
	}

	/* a {
		text-decoration: none;
		color: lightgrey;
		font-size: 11px;
	} */
`;

const AttributionContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	text-align: center;
	margin-bottom: 10rem;
	width: 100%;
	padding: 1rem 0 5rem 0;
`;

const AttributionLink = styled.a`
	flex: 1 1 25%;
	max-width: calc(50% - 20px);
	color: lightgrey;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const LogoImage = styled.img`
	width: 50px;
`;

function About() {
	return (
		<AboutContainer>
			<h1>About the project</h1>

			<p>
				As these things usually go, Boilerplate is a project that scratches my own itch (or will, at some point). It
				aims to reduce the setup necessary for every new coding project to a minimum - just spin up a new project,
				select a frontend framework (or none), what backend you'd like to use, and bam! - Boilerplate does the rest.
			</p>
			<p>
				<br />
			</p>
			<p>
				And by that I mean, Boilerplate will spit out a few npm commands, setting up vite, what have you. You can
				copy-pasta the lines or download a Bash-file you can run in your terminal, and set up your project with all the
				base dependencies.
			</p>
			<p>
				<br />
			</p>
			<p>
				Currently - as it is about my itches - the projects are limited to React and Node frameworks - but I did include
				a NoSQL (Mongo) and SQL (Postgres) database! In the future, I'd like to include more options, but I do think
				it'll stay in the JavaScript realm.
			</p>
			<p>
				<br />
			</p>
			<p>So go ahead, check it out, and enjoy!</p>
			<br />
			<br />
			<br />

			<h4>Attributions</h4>
			<AttributionContainer>
				<AttributionLink href='https://www.freepik.com/free-vector/digital-futuristic-binary-code-number-background_12686650.htm#fromView=search&page=1&position=1&uuid=93894aea-bb05-4d8e-a379-bdee07849314'>
					<LogoImage src='/background2.jpg' />
					<b>Project Detail Image</b> by starline on Freepik
				</AttributionLink>
				<AttributionLink href='https://graphql.org/brand/' target='_blank'>
					<LogoImage src='/graphql.svg' />
					<b>The GraphQL hexagraph</b> by The GraphQL Foundation
				</AttributionLink>
				<AttributionLink href='https://react.dev/' target='_blank'>
					<LogoImage src='/react.svg' alt='' />
					<b>React logo</b> by the React Team
				</AttributionLink>
				<AttributionLink href='https://vercel.com/geist/brands' target='_blank'>
					<LogoImage src='/nextjs.svg' style={{ background: 'white', padding: '5px', borderRadius: '5px' }} alt='' />
					<b>NextJS</b> logo by Vercel
				</AttributionLink>
				<AttributionLink href='https://keystonejs.com/branding' target='_blank'>
					<LogoImage src='/keystonejs.svg' alt='' />
					<b>KeystoneJS logo</b> by KeystoneJS
				</AttributionLink>
				<AttributionLink href='https://nodejs.org/en/blog/uncategorized/trademark' target='_blank'>
					<LogoImage src='/node.svg' alt='' />
					<b>NodeJS logo</b> by NodeJS
				</AttributionLink>
				<AttributionLink href='https://github.com/expressjs/express/blob/master/LICENSE' target='_blank'>
					<LogoImage src='/express.svg' style={{ background: 'white', padding: '5px', borderRadius: '50%' }} alt='' />
					<b>express logo</b> by expressJS
				</AttributionLink>
				<AttributionLink href='https://www.typescriptlang.org/branding/' target='_blank'>
					<LogoImage src='/ts.svg' alt='' />
					<b>TypeScript logo</b> by Microsoft
				</AttributionLink>
				<AttributionLink href='https://handbook.strapi.io/strapi-brand-book-2022/strapi-logo' target='_blank'>
					<LogoImage src='/strapi.svg' alt='' />
					<b>Strapi logo</b> by Strapi
				</AttributionLink>
				<AttributionLink href='https://www.postgresql.org/about/policies/trademarks/' target='_blank'>
					<LogoImage src='/pg.svg' alt='' />
					<b>PostgreSQL logo</b> by PostgreSQL
				</AttributionLink>
				<AttributionLink href='https://www.mongodb.com/company/newsroom/brand-resources' target='_blank'>
					<LogoImage src='/mongo.svg' alt='' />
					<b>MongoDB logo</b> by MongoDB
				</AttributionLink>
			</AttributionContainer>
		</AboutContainer>
	);
}
