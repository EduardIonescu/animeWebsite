import SectionNavbar from "./sectionNavbar";
import SectionTop from "./top/sectionTop";
import SectionCharacters from "./characters/sectionCharacters";
import SectionReviews from "./reviews/sectionReviews";
import SectionRecommendations from "./recommendations/sectionRecommendations";
import { useRecommendationsData } from "../../../hooks/useAnimeData";
import { useReviewsData } from "../../../hooks/useAnimeData";
import { useCharactersData } from "../../../hooks/useAnimeData";
import { useState } from "react";
import AnimeCharactersSection from "../animeCharactersSection/AnimeCharactersSection";
import AnimeReviewsSection from "../animeReviewsSection/animeReviewsSection";
import AnimeRecommendationsSection from "../animeRecommendationsSection/animeRecommendationsSection";
export default function AnimeInfoSection({ animeData, animeId }) {
	const characters = useCharactersData(animeId);
	const reviews = useReviewsData(animeId);
	const [recommendations, setRecommendations] =
		useRecommendationsData(animeId);
	const [page, setPage] = useState("details");
	return (
		<section className="w-[75%] px-4">
			<SectionNavbar page={page} setPage={setPage} />
			{page == "details" && (
				<>
					<SectionTop animeData={animeData} />
					<SectionCharacters characters={characters} />
					<SectionReviews key={animeId} reviews={reviews} />
					<SectionRecommendations
						recommendations={recommendations}
						setRecommendations={setRecommendations}
					/>
				</>
			)}
			{page == "characters" && (
				<AnimeCharactersSection characters={characters} />
			)}
			{page == "reviews" && <AnimeReviewsSection reviews={reviews} />}
			{page == "recommendations" && (
				<AnimeRecommendationsSection
					recommendations={recommendations}
				/>
			)}
		</section>
	);
}
