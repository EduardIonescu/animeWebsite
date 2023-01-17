import CharacterCard from "../animeInfoSection/characters/characterCard";
export default function AnimeCharactersSection({ characters }) {
	return (
		<section>
			<ul>
				{console.log("characters", characters)}
				{characters.map((character, i) => (
					<CharacterCard
						key={i}
						characterInfo={character}
						index={i}
						isPage={true}
					/>
				))}
			</ul>
		</section>
	);
}
