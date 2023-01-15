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
					{broadcast.string}
				</li>
				<li>
					<span className="font-medium">Producers:</span>{" "}
					<InlineLinks array={producers} />
				</li>
				<li>
					<span className="font-medium">Studios:</span>{" "}
					<InlineLinks array={studios} />
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
					<InlineLinks array={demographics} />
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
