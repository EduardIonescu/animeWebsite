import CharacterCard from "../animeInfoSection/characters/characterCard";
export default function AnimeCharactersSection({ characters }) {
	return (
		<section>
			{characters && characters.length >= 1 ? (
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
			) : (
				<p className="mt-4 text-sm">
					No characters or voice actors have been added to this title
				</p>
			)}
		</section>
	);
}
