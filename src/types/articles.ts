export type Article = {
	_id: string | number | null;
	title: string;
	subheadline: string | null;
	text: string;
	tags: string[] | null;
	imageUrl: string;
	externalLink: string;
	linkedProjects: ({
		title: string | null;
		_id: string | number | null;
	} | null)[];
	createdBy: {
		_id: string | number | null;
		username: string;
	} | null;
	createdAt: string;
};
