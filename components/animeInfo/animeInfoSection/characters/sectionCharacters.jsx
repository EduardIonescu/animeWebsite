import CharacterCard from "./characterCard";
export default function SectionCharacters({ characters }) {
	if (characters) {
		if (characters.length >= 1)
			return (
				<section className="mt-6">
					<h3 className="font-bold">Characters & Voice Actors</h3>
					<hr className="border-black/20 my-1" />
					<div className="flex">
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
					</div>
				</section>
			);
	} else
		return (
			<section className="mt-6">
				<h3 className="font-bold">Characters & Voice Actors</h3>
				<hr className="border-black/20 my-1" />
				<p className="text-xs">
					No characters have been added to this title.
				</p>
			</section>
		);
}
