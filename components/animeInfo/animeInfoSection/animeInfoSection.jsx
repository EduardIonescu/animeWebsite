import SectionNavbar from "./sectionNavbar";
import SectionTop from "./top/sectionTop";
import SectionCharacters from "./characters/sectionCharacters";
import SectionReviews from "./reviews/sectionReviews";
import SectionRecommendations from "./recommendations/sectionRecommendations";
export default function AnimeInfoSection({ animeData, animeId }) {
	return (
		<section className="w-[75%] px-4">
			<SectionNavbar />
			<SectionTop animeData={animeData} />
			<SectionCharacters animeId={animeId} />
			<SectionReviews key={animeId} animeId={animeId} />
			<SectionRecommendations animeId={animeId} />
		</section>
	);
}
