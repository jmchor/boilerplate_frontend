import { useLazyQuery } from '@apollo/client';
import { createFileRoute } from '@tanstack/react-router';
import { graphql } from 'gql.tada';
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
	height: auto;

	h1,
	p {
		margin: 0;
	}

	button {
		cursor: pointer;
	}
`;

const CHECK_AUTHENTICATION = graphql(`
	query CheckAuthentication {
		checkAuthentication {
			cookieIsPresent
		}
	}
`);

function About() {
	const [checkAuth, { data, error, loading }] = useLazyQuery(CHECK_AUTHENTICATION);

	console.log(data, error, loading);
	return (
		<AboutContainer>
			<h1>This is Boilerplate.</h1>

			<button onClick={() => checkAuth()}> Check Auth </button>
			<p>
				<br />
			</p>
			<p>As these things usually go, Boilerplate is a project that scratches my own itch (or will, at some point). </p>
			<p>
				It aims to reduce the setup necessary for every new coding project to a minimum - just spin up a new project,
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
		</AboutContainer>
	);
}
