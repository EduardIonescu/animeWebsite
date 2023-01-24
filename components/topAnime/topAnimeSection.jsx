import AnimeCard from "../animeCard";
import Loading from "../other/loading";

export default function TopAnimeSection({
	showTrending,
	popularAnimeData,
	trendingAnimeData,
}) {
	if (popularAnimeData.length >= 1) {
		return (
			<section
				className="flex flex-wrap flex-col md:flex-row md:gap-4
      xl:gap-x-[calc((100%-(380px*3))/2)] gap-y-5 pb-6"
			>
				{(!showTrending ? popularAnimeData : trendingAnimeData).map(
					(animeData, i) => (
						<AnimeCard key={i} animeData={animeData} />
					)
				)}
			</section>
		);
	} else {
		return <Loading />;
	}
}
