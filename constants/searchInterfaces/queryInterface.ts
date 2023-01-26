export interface IQuery {
	results?: ResultsEntity[] | null;
}
export interface ResultsEntity {
	id: string;
	title: string;
	image: string;
	rating: number;
	releaseDate: number;
	type: string;
}
