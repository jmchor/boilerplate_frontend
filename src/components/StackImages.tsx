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
		cms?: string;
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
			break;
		case 'nextjs':
			return (
				<>
					{renderToolImage('nextjs.svg')}
					{gqlImage}
				</>
			);
			break;
		case 'nextts':
			return (
				<>
					{renderToolImage('nextjs.svg')}
					{renderToolImage('ts.svg')}
					{gqlImage}
				</>
			);
			break;

		case 'vanillajs':
			return (
				<>
					{renderToolImage('javascript.svg')}
					{gqlImage}
				</>
			);
			break;
		default:
			return (
				<>
					{renderToolImage('react.svg')}
					{gqlImage}
				</>
			);
			break;
	}
};

const renderBackendImages = (environment?: string, database?: string, cms?: string): JSX.Element => {
	const databaseImage = database === 'mongodb' ? 'mongo.svg' : 'pg.svg';
	let cmsImageElement = null;

	if (cms === 'keystoneJS') {
		cmsImageElement = renderToolImage('keystonejs.svg');
	} else if (cms) {
		cmsImageElement = renderToolImage('strapi.svg');
	}
	switch (environment) {
		case 'nodets':
			return (
				<>
					{renderToolImage('node.svg')}
					{renderToolImage(databaseImage)}
					{cmsImageElement && cmsImageElement}
				</>
			);
		case 'nodejs':
			return (
				<>
					{renderToolImage('node.svg')}
					{renderToolImage(databaseImage)}
					{cmsImageElement && cmsImageElement}
				</>
			);
		case 'nodeExpressTS':
			return (
				<>
					{renderToolImage('node.svg')}
					{renderToolImage('express.svg')}
					{renderToolImage(databaseImage)}
					{cmsImageElement && cmsImageElement}
				</>
			);
		case 'nodeExpressJS':
			return (
				<>
					{renderToolImage('node.svg')}
					{renderToolImage('express.svg')}
					{renderToolImage(databaseImage)}
					{cmsImageElement && cmsImageElement}
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
			{backend && backend.environment && renderBackendImages(backend.environment, backend.database, backend.cms)}
		</>
	);
};

export default StackImages;
