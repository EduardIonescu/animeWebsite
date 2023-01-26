export interface ReviewsInterface {
	mal_id: number;
	url: string;
	type: string;
	reactions: Reactions;
	date: string;
	review: string;
	score: number;
	tags?: string[] | null;
	is_spoiler: boolean;
	is_preliminary: boolean;
	episodes_watched?: null;
	user: User;
}
export interface Reactions {
	overall: number;
	nice: number;
	love_it: number;
	funny: number;
	confusing: number;
	informative: number;
	well_written: number;
	creative: number;
}
export interface User {
	url: string;
	username: string;
	images: Images;
}
export interface Images {
	jpg: JpgOrWebp;
	webp: JpgOrWebp;
}
export interface JpgOrWebp {
	image_url: string;
}
