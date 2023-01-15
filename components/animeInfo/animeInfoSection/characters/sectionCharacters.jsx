import getData from "../../../../hooks/getData";
import { useEffect, useState } from "react";
import Image from "next/image";
import CharacterCard from "./characterCard";
export default function SectionCharacters({ animeId }) {
	const [characters, setCharacters] = useState(false);
	useEffect(() => {
		let ignore = false;

		async function startFetching() {
			const data = await getData(
				`https://api.jikan.moe/v4/anime/${animeId}/characters`
			);

			if (!ignore) {
				setCharacters(
					data.data.length >= 10
						? data.data
								.slice(0, 10)
								.sort((a, b) =>
									a.favorites > b.favorites ? -1 : 1
								)
						: data.data
				);
			}
		}

		if (animeId) {
			startFetching();
		}
		return () => {
			ignore = true;
		};
	}, [animeId]);
	if (characters)
		return (
			<section className="flex">
				{console.log(characters)}
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
