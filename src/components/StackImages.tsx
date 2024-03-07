import { ToolImage } from '../styles/ProjectCardStyles';

export interface ProjectForImages {
	frontend?: {
		framework?: string;
	};
	backend?: {
		environment?: string;
		gqlServer?: boolean;
		database?: string;
	};
}

const ToolImageComponent = ({ src }: { src: string }) => <ToolImage src={`../../static/${src}`} alt={src} />;

const renderToolImage = (src: string): JSX.Element => <ToolImageComponent src={src} />;

const renderFrontendImages = (framework?: string): JSX.Element => {
	switch (framework) {
		case 'reactts':
			return (
				<>
					{renderToolImage('react.svg')}
					{renderToolImage('ts.svg')}
				</>
			);
		case 'nextJS':
			return renderToolImage('nextjs.svg');
		default:
			return renderToolImage('react.svg');
	}
};

const renderBackendImages = (environment?: string, gqlServer?: boolean, database?: string): JSX.Element => {
	const backendImage = environment === 'nodets' ? 'node.svg' : 'express.svg';
	const gqlImage = gqlServer ? renderToolImage('graphql.svg') : null;
	const databaseImage = database === 'mongodb' ? 'mongo.svg' : 'pg.svg';

	return (
		<>
			{renderToolImage(backendImage)}
			{gqlImage}
			{renderToolImage(databaseImage)}
		</>
	);
};

const StackImages = ({ project }: { project: ProjectForImages }) => {
	const { frontend, backend } = project || {};

	return (
		<>
			{frontend && frontend.framework && renderFrontendImages(frontend.framework)}
			{backend && backend.environment && renderBackendImages(backend.environment, backend.gqlServer, backend.database)}
		</>
	);
};

export default StackImages;
