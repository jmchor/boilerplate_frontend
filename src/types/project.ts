export type Project = {
	backend: {
		database: 'mongodb' | 'postgres' | null;
		cms: 'keystoneJS' | 'strapi' | null;
		gqlServer: boolean | null;
		moduleType?: 'commonjs' | 'module' | null;
		environment: 'nodets' | 'nodejs' | 'nodeExpressTS' | 'nodeExpressJS' | null;
	} | null;

	frontend: {
		framework: 'nextJS' | 'reactJS' | 'reactts' | 'vanillajs' | null;
		gqlClient: boolean | null;
	} | null;

	_id: string | number | null;

	description: string | null;

	title: string;

	createdBy: {
		_id: string | number | null;
		username: string | null;
	} | null;

	articles?: { _id: string | number | null; title: string | null }[] | null;
	kanban?: { _id: string | number | null } | null;
};
