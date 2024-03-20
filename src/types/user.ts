export type User = {
	likedArticles:
		| ({
				_id: string | number | null;
				title: string | null;
		  } | null)[]
		| null;
	articles:
		| ({
				_id: string | number | null;
				title: string;
		  } | null)[]
		| null;
	projects:
		| ({
				_id: string | number | null;
				title: string;
		  } | null)[]
		| null;
	_id: string | number | null;
	email: string;
	username: string;
	imageUrl: string;
};
