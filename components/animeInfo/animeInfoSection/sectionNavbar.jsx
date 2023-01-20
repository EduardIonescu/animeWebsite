export default function SectionNavbar({ page, setPage }) {
	const setPageDetails = () => setPage("details");
	const setPageCharacters = () => setPage("characters");
	const setPageReviews = () => setPage("reviews");
	const setPageRecommendations = () => setPage("recommendations");
	return (
		<nav
			className="flex gap-4 text-[14px] text-lighterBlue
     w-full border-b-[1px] border-black/20"
		>
			<button
				type="button"
				onClick={setPageDetails}
				className={`
			transition duration-300 px-[6px] pb-[2px] ${
				page == "details"
					? "bg-shadowDarkBlue text-shadowLightBlue rounded dark:bg-coolBlack"
					: "hover:opacity-80 hover:-translate-y-[1px]"
			}`}
			>
				Details
			</button>
			<button
				type="button"
				onClick={setPageCharacters}
				className={`
			transition duration-300 px-[6px] pb-[2px] ${
				page == "characters"
					? "bg-shadowDarkBlue text-shadowLightBlue rounded dark:bg-coolBlack"
					: "hover:opacity-80 hover:-translate-y-[1px] "
			}`}
			>
				Characters & Staff
			</button>
			<button
				type="button"
				onClick={setPageReviews}
				className={`
			transition duration-300 px-[6px] pb-[2px] ${
				page == "reviews"
					? "bg-shadowDarkBlue text-shadowLightBlue rounded dark:bg-coolBlack"
					: "hover:opacity-80 hover:-translate-y-[1px]"
			}`}
			>
				Reviews
			</button>
			<button
				type="button"
				onClick={setPageRecommendations}
				className={`
			transition duration-300 px-[6px] pb-[2px] ${
				page == "recommendations"
					? "bg-shadowDarkBlue text-shadowLightBlue rounded dark:bg-coolBlack"
					: "hover:opacity-80 hover:-translate-y-[1px]"
			}`}
			>
				Recommendations
			</button>
		</nav>
	);
}
