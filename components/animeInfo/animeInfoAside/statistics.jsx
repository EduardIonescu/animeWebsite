export default function Statistics({ animeData }) {
	const { score, scored_by, rank, popularity, members, favorites } =
		animeData;
	return (
		<article className="pt-6">
			<h3 className="pb-1 font-bold">Statistics</h3>
			<hr className="w-full relative border-black/20" />
			<ul className="text-[12px] font-light pt-1">
				<li>
					<span className="font-medium">Score:</span> {score} (scored
					by {scored_by.toLocaleString("en")} users)
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
					{members.toLocaleString("en")}
				</li>
				<li>
					<span className="font-medium">Favorites:</span>{" "}
					{favorites.toLocaleString("en")}
				</li>
			</ul>
		</article>
	);
}
