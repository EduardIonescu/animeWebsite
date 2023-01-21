import AnimeCard from "../animeCard";
export default function ResultsSection({ resultsData }) {
	return (
		<section
			className="flex flex-wrap flex-col md:flex-row md:gap-4
xl:gap-x-[calc((100%-(380px*3))/2)] gap-y-5 pb-6 "
		>
			{resultsData.map((animeData) => (
				<AnimeCard key={animeData.mal_id} animeData={animeData} />
			))}
		</section>
	);
}
