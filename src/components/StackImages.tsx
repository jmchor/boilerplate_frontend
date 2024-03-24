import { ToolImage } from '../styles/ProjectCardStyles.js';

export interface ProjectForImages {
	frontend?: {
		framework?: string;
		gqlClient?: boolean;
	};
	backend?: {
		environment?: string;
		gqlServer?: boolean;
		database?: string;
	};
}

const ToolImageComponent = ({ src }: { src: string }) => <ToolImage src={`../../${src}`} alt={src} />;

const renderToolImage = (src: string): JSX.Element => <ToolImageComponent src={src} />;

const renderFrontendImages = (framework?: string, gqlClient?: boolean): JSX.Element => {
	const gqlImage = gqlClient ? renderToolImage('graphql.svg') : null;

	switch (framework) {
		case 'reactts':
			return (
				<>
					{renderToolImage('react.svg')}
					{renderToolImage('ts.svg')}
					{gqlImage}
				</>
			);
		case 'nextjs':
			return (
				<>
					{renderToolImage('nextjs.svg')}
					{gqlImage}
				</>
			);

		case 'vanillajs':
			return (
				<>
					{renderToolImage('javascript.svg')}
					{gqlImage}
				</>
			);
		default:
			return (
				<>
					{renderToolImage('react.svg')}
					{gqlImage}
				</>
			);
	}
};

const renderBackendImages = (environment?: string, database?: string): JSX.Element => {
	const databaseImage = database === 'mongodb' ? 'mongo.svg' : 'pg.svg';
	switch (environment) {
		case 'nodets':
			return (
				<>
					{renderToolImage('node.svg')}
					{renderToolImage(databaseImage)}
				</>
			);
		case 'nodejs':
			return (
				<>
					{renderToolImage('node.svg')}
					{renderToolImage(databaseImage)}
				</>
			);
		case 'nodeExpressTS':
			return (
				<>
					{renderToolImage('node.svg')}
					{renderToolImage('express.svg')}
					{renderToolImage(databaseImage)}
				</>
			);
		case 'nodeExpressJS':
			return (
				<>
					{renderToolImage('node.svg')}
					{renderToolImage('express.svg')}
					{renderToolImage(databaseImage)}
				</>
			);
		default:
			break;
	}
	return <></>;
};

const StackImages = ({ project }: { project: ProjectForImages }) => {
	const { frontend, backend } = project || {};

	return (
		<>
			{frontend && frontend.framework && renderFrontendImages(frontend.framework, frontend.gqlClient)}
			{backend && backend.environment && renderBackendImages(backend.environment, backend.database)}
		</>
	);
};

export default StackImages;
