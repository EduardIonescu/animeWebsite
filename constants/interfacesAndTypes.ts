export interface AnimeDataType {
	images: { webp: { image_url: string } };
	title_english: string;
	title: string;
	score: number;
	aired: { prop: { from: { year: number } } };
	mal_id: number;
}
