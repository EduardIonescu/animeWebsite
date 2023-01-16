import CharacterCard from "./characterCard";
import { useCharactersData } from "../../../../hooks/useAnimeData";
export default function SectionCharacters({ animeId }) {
	const characters = useCharactersData(animeId);

	if (characters)
		return (
			<section className="flex">
				<ul className="w-full border-r-[1px] pr-2 border-black/20">
					{characters.slice(0, 5).map((character, i) => (
						<CharacterCard
							key={i}
							characterInfo={character}
							index={i}
						/>
					))}
				</ul>
				<ul className="w-full pl-2">
					{characters.slice(5, 10).map((character, i) => (
						<CharacterCard
							key={i}
							characterInfo={character}
							index={i}
						/>
					))}
				</ul>
			</section>
		);
}
