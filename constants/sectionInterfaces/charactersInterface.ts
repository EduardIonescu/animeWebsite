export interface ICharacters {
	character: Character;
	role: string;
	favorites: number;
	voice_actors?: VoiceActorsEntity[] | null;
}
export interface Character {
	mal_id: number;
	url: string;
	images: Images;
	name: string;
}
export interface Images {
	jpg: Jpg;
	webp: Webp;
}
export interface Jpg {
	image_url: string;
}
export interface Webp {
	image_url: string;
	small_image_url: string;
}
export interface VoiceActorsEntity {
	person: Person;
	language: string;
}
export interface Person {
	mal_id: number;
	url: string;
	images: Images1;
	name: string;
}
export interface Images1 {
	jpg: Jpg;
}
