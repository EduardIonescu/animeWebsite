import ReadMoreButton from "../../readMoreButton";
import { useState } from "react";
export default function Statistics({ animeData }) {
	const [readMore, setReadMore] = useState(false);
	const { score, scored_by, rank, popularity, members, favorites } =
		animeData;
	return (
		<article className="pt-6">
			<h3 className="pb-1 font-bold hidden xl:block">Statistics</h3>
			<div className="xl:hidden">
				<ReadMoreButton
					readMore={readMore}
					setReadMore={setReadMore}
					name="Statistics"
				/>
			</div>
			<hr className="w-full relative border-black/20" />
			<ul
				className={`text-[12px] font-light pt-1 xl:hidden transition-[max-height]
			duration-500 ${readMore ? "max-h-[200px]" : "max-h-0"} overflow-hidden`}
			>
				<li>
					<span className="font-medium">Score:</span>{" "}
					{score || "None"} (scored by{" "}
					{scored_by >= 1 ? scored_by.toLocaleString("en") : "0"}{" "}
					users)
				</li>
				<li>
					<span className="font-medium">Ranked:</span> #{rank}
				</li>
				<li>
					<span className="font-medium">Popularity:</span> #
					{popularity}
				</li>
				<li>
					<span className="font-medium">Members:</span>{" "}
					{members >= 1 ? members.toLocaleString("en") : "None"}
				</li>
				<li>
					<span className="font-medium">Favorites:</span>{" "}
					{favorites >= 1 ? favorites.toLocaleString("en") : "None"}
				</li>
			</ul>
			<ul className="text-[12px] font-light pt-1 hidden xl:block">
				<li>
					<span className="font-medium">Score:</span>{" "}
					{score || "None"} (scored by{" "}
					{scored_by >= 1 ? scored_by.toLocaleString("en") : "0"}{" "}
					users)
				</li>
				<li>
					<span className="font-medium">Ranked:</span> #{rank}
				</li>
				<li>
					<span className="font-medium">Popularity:</span> #
					{popularity}
				</li>
				<li>
					<span className="font-medium">Members:</span>{" "}
					{members >= 1 ? members.toLocaleString("en") : "None"}
				</li>
				<li>
					<span className="font-medium">Favorites:</span>{" "}
					{favorites >= 1 ? favorites.toLocaleString("en") : "None"}
				</li>
			</ul>
		</article>
	);
}
