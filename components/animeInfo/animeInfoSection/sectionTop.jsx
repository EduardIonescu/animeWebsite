import InlineLinks from "../inlineLinks";
export default function SectionTop({ animeData }) {
	const {
		score,
		scored_by,
		rank,
		popularity,
		members,
		synopsis,
		background,
		relations,
	} = animeData;
	return (
		<section>
			<article
				className="bg-blue-200/40 py-4 px-2 flex items-center mt-2 border-[1px]
    shadow"
			>
				<div
					className="flex flex-col items-center border-r-[1px] border-black/20
      pr-6"
				>
					<p
						className="bg-blue-900 text-shadowLightBlue uppercase text-[10px]
          w-full text-center
        "
					>
						score
					</p>
					<h2 className="text-[32px] leading-[32px] font-bold pt-1">
						{score}
					</h2>
					<p className="text-[11px]">
						{scored_by.toLocaleString("en")} users
					</p>
				</div>
				<div className="flex gap-6 pl-4 text-xl font-medium">
					<h3>
						Ranked <span className="font-bold">#{rank}</span>
					</h3>
					<h3>
						Popularity{" "}
						<span className="font-bold">#{popularity}</span>
					</h3>
					<h3>
						Members{" "}
						<span className="font-bold">
							{members.toLocaleString("en")}
						</span>
					</h3>
				</div>
			</article>
			<article className="mt-6">
				<h3 className="font-bold">Synopsis</h3>
				<hr className="border-black/20 my-1" />
				<p className="text-[12px] whitespace-pre-wrap">{synopsis}</p>
			</article>
			<article className="mt-6">
				<h3 className="font-bold">Background</h3>
				<hr className="border-black/20 my-1" />
				<p className="text-[12px] whitespace-pre-wrap">{background}</p>
			</article>
			<article className="mt-6">
				<h3 className="font-bold">Related Anime</h3>
				<hr className="border-black/20 my-1" />
				{relations.map((relation, i) => (
					<p className="text-[14px] border-b-[1px] leading-7">
						{relation.relation}:{" "}
						<InlineLinks array={relation.entry} />
					</p>
				))}
			</article>
			<article className="mt-6">
				<h3 className="font-bold">Characters & Voice Actors</h3>
				<hr className="border-black/20 my-1" />
			</article>
		</section>
	);
}
