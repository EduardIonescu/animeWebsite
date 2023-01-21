import CharacterCard from "./characterCard";
import ReadMoreButton from "../../../readMoreButton";
import { useState } from "react";
export default function SectionCharacters({ characters }) {
	const [readMore, setReadMore] = useState(false);
	if (characters) {
		if (characters.length >= 1)
			return (
				<section className="mt-6 order-1">
					<div className="xl:hidden">
						<ReadMoreButton
							readMore={readMore}
							setReadMore={setReadMore}
							name="Characters & Voice Actors"
						/>
					</div>
					<h3 className="font-bold hidden xl:block">
						Characters & Voice Actors
					</h3>
					<hr className="border-black/20 my-1" />
					<ul
						className={`w-full border-black/20 xl:hidden
						dark:border-coolBlack transition-all duration-500 ${
							readMore ? "max-h-[1000px]" : "max-h-0"
						} overflow-hidden`}
					>
						{characters.slice(0, 10).map((character, i) => (
							<CharacterCard
								key={i}
								characterInfo={character}
								index={i}
							/>
						))}
					</ul>
					<div className="hidden xl:flex">
						<ul
							className="w-full border-r-[1px] pr-2 border-black/20
						dark:border-coolBlack"
						>
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
