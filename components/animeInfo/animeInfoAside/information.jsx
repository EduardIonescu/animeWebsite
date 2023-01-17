import InlineLinks from "../inlineLinks";

export default function Information({ animeData }) {
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
			<h3 className="pb-1 font-bold">Information</h3>
			<hr className="w-full relative border-black/20" />
			<ul className="text-[12px] font-light pt-1">
				<li>
					<span className="font-medium">Type:</span> {type}
				</li>
				<li>
					<span className="font-medium">Episodes:</span> {episodes}
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
					{producers.length >= 1 ? (
						<InlineLinks array={producers} />
					) : (
						"None"
					)}
				</li>
				<li>
					<span className="font-medium">Studios:</span>{" "}
					{studios.length >= 1 ? (
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
					<InlineLinks array={genres} />
				</li>
				<li>
					<span className="font-medium">Demographic:</span>{" "}
					{demographics.length >= 1 ? (
						<InlineLinks array={demographics} />
					) : (
						"None"
					)}
				</li>
				<li>
					<span className="font-medium">Duration:</span> {duration}
				</li>
				<li>
					<span className="font-medium">Rating:</span> {rating}
				</li>
				<li>
					<span className="font-medium"></span>{" "}
				</li>
			</ul>
		</article>
	);
}
