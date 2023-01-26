import InlineLinks from "../inlineLinks";
import ReadMoreButton from "../../readMoreButton";
import { useState } from "react";
import { AnimeDataInterface } from "../../../constants/interfacesAndTypes";
export default function Information({
	animeData,
}: {
	animeData: AnimeDataInterface;
}) {
	const [readMore, setReadMore] = useState(false);
	const {
		type,
		episodes,
		status,
		aired,
		broadcast,
		producers,
		studios,
		source,
		genres,
		demographics,
		duration,
		rating,
	} = animeData;
	return (
		<article className="pt-6">
			<h3 className="pb-1 font-bold hidden xl:block">Information</h3>
			<div className="xl:hidden">
				<ReadMoreButton
					readMore={readMore}
					setReadMore={setReadMore}
					name="Information"
				/>
			</div>
			<hr className="w-full relative border-black/20" />
			{/* Up to 1280px */}
			<ul
				className={`text-[12px] font-light pt-1 xl:hidden transition-[max-height]
			duration-500 ${readMore ? "max-h-[350px]" : "max-h-0"} overflow-hidden`}
			>
				<li>
					<span className="font-medium">Type:</span> {type}
				</li>
				<li>
					<span className="font-medium">Episodes:</span>{" "}
					{episodes || "0"}
				</li>
				<li>
					<span className="font-medium">Status:</span> {status}
				</li>
				<li>
					<span className="font-medium">Aired:</span> {aired.string}
				</li>
				<li>
					<span className="font-medium">Broadcast:</span>{" "}
					{broadcast.string || "None"}
				</li>
				<li>
					<span className="font-medium">Producers:</span>{" "}
					{producers && producers.length >= 1 ? (
						<InlineLinks array={producers} />
					) : (
						"None"
					)}
				</li>
				<li>
					<span className="font-medium">Studios:</span>{" "}
					{studios && studios.length >= 1 ? (
						<InlineLinks array={studios} />
					) : (
						"None"
					)}
				</li>
				<li>
					<span className="font-medium">Source:</span> {source}
				</li>
				<li>
					<span className="font-medium">Genres: </span>{" "}
					{genres && genres.length >= 1 ? (
						<InlineLinks array={genres} />
					) : (
						"None"
					)}
				</li>
				<li>
					<span className="font-medium">Demographic:</span>{" "}
					{demographics && demographics.length >= 1 ? (
						<InlineLinks array={demographics} />
					) : (
						"None"
					)}
				</li>
				<li>
					<span className="font-medium">Duration:</span> {duration}
				</li>
				<li>
					<span className="font-medium">Rating:</span>{" "}
					{rating || "None"}
				</li>
				<li>
					<span className="font-medium"></span>{" "}
				</li>
			</ul>
			{/* Bigger than 1280px */}
			<ul className="text-[12px] font-light pt-1 hidden xl:block">
				<li>
					<span className="font-medium">Type:</span> {type}
				</li>
				<li>
					<span className="font-medium">Episodes:</span>{" "}
					{episodes || "0"}
				</li>
				<li>
					<span className="font-medium">Status:</span> {status}
				</li>
				<li>
					<span className="font-medium">Aired:</span> {aired.string}
				</li>
				<li>
					<span className="font-medium">Broadcast:</span>{" "}
					{broadcast.string || "None"}
				</li>
				<li>
					<span className="font-medium">Producers:</span>{" "}
					{producers && producers.length >= 1 ? (
						<InlineLinks array={producers} />
					) : (
						"None"
					)}
				</li>
				<li>
					<span className="font-medium">Studios:</span>{" "}
					{studios && studios.length >= 1 ? (
						<InlineLinks array={studios} />
					) : (
						"None"
					)}
				</li>
				<li>
					<span className="font-medium">Source:</span> {source}
				</li>
				<li>
					<span className="font-medium">Genres: </span>{" "}
					{genres && genres.length >= 1 ? (
						<InlineLinks array={genres} />
					) : (
						"None"
					)}
				</li>
				<li>
					<span className="font-medium">Demographic:</span>{" "}
					{demographics && demographics.length >= 1 ? (
						<InlineLinks array={demographics} />
					) : (
						"None"
					)}
				</li>
				<li>
					<span className="font-medium">Duration:</span> {duration}
				</li>
				<li>
					<span className="font-medium">Rating:</span>{" "}
					{rating || "None"}
				</li>
				<li>
					<span className="font-medium"></span>{" "}
				</li>
			</ul>
		</article>
	);
}
