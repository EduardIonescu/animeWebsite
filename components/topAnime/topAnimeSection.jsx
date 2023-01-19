import useTopAnimeData from "../../hooks/useTopAnimeData";
import AnimeCard from "../animeCard";

export default function TopAnimeSection({ showTrending }) {
	// Make 2 separate states for popular / trending and find a way to keep the
	// data between rerenders
	const topAnimeData = useTopAnimeData();
	const trendingAnimeData = useTopAnimeData("trending");
	if (topAnimeData.length >= 1) {
		return (
			<section
				className="flex flex-wrap flex-col sm:flex-row
      xl:gap-x-[calc((100%-(380px*3))/2)] gap-y-5 pb-6"
			>
				{(!showTrending ? topAnimeData : trendingAnimeData).map(
					(animeData, i) => (
						<AnimeCard key={i} animeData={animeData} />
					)
				)}
			</section>
		);
	} else {
		return <section>Loading...</section>;
	}
}
