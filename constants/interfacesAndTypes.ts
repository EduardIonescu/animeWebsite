export interface IsAnimeData {
	mal_id: number;
	url: string;
	images: Images;
	trailer: Trailer;
	approved: boolean;
	titles?: TitlesEntity[] | null;
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms?: string[] | null;
	type: string;
	source: string;
	episodes: number;
	status: string;
	airing: boolean;
	aired: Aired;
	duration: string;
	rating: string;
	score: number;
	scored_by: number;
	rank: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: string;
	season: string;
	year: number;
	broadcast: Broadcast;
	producers?:
		| ProducersEntityOrLicensorsEntityOrStudiosEntityOrGenresEntityOrDemographicsEntityOrEntryEntity[]
		| null;
	licensors?:
		| ProducersEntityOrLicensorsEntityOrStudiosEntityOrGenresEntityOrDemographicsEntityOrEntryEntity[]
		| null;
	studios?:
		| ProducersEntityOrLicensorsEntityOrStudiosEntityOrGenresEntityOrDemographicsEntityOrEntryEntity[]
		| null;
	genres?:
		| ProducersEntityOrLicensorsEntityOrStudiosEntityOrGenresEntityOrDemographicsEntityOrEntryEntity[]
		| null;
	explicit_genres?: null[] | null;
	themes?: null[] | null;
	demographics?:
		| ProducersEntityOrLicensorsEntityOrStudiosEntityOrGenresEntityOrDemographicsEntityOrEntryEntity[]
		| null;
	relations?: RelationsEntity[] | null;
	theme: Theme;
	external?: null[] | null;
	streaming?: StreamingEntity[] | null;
}
export interface Images {
	jpg: JpgOrWebp;
	webp: JpgOrWebp;
}
export interface JpgOrWebp {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}
export interface Trailer {
	youtube_id: string;
	url: string;
	embed_url: string;
	images: Images1;
}
export interface Images1 {
	image_url: string;
	small_image_url: string;
	medium_image_url: string;
	large_image_url: string;
	maximum_image_url: string;
}
export interface TitlesEntity {
	type: string;
	title: string;
}
export interface Aired {
	from: string;
	to: string;
	prop: Prop;
	string: string;
}
export interface Prop {
	from: FromOrTo;
	to: FromOrTo;
}
export interface FromOrTo {
	day: number;
	month: number;
	year: number;
}
export interface Broadcast {
	day: string;
	time: string;
	timezone: string;
	string: string;
}
export interface ProducersEntityOrLicensorsEntityOrStudiosEntityOrGenresEntityOrDemographicsEntityOrEntryEntity {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}
export interface RelationsEntity {
	relation: string;
	entry?:
		| ProducersEntityOrLicensorsEntityOrStudiosEntityOrGenresEntityOrDemographicsEntityOrEntryEntity[]
		| null;
}
export interface Theme {
	openings?: string[] | null;
	endings?: string[] | null;
}
export interface StreamingEntity {
	name: string;
	url: string;
}
