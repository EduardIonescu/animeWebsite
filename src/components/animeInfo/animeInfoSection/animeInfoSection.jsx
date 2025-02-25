"use client";

import { useState } from "react";
import {
  useCharactersData,
  useRecommendationsData,
  useReviewsData,
} from "../../../hooks/useAnimeData";
import AnimeCharactersSection from "../animeCharactersSection/AnimeCharactersSection";
import AnimeRecommendationsSection from "../animeRecommendationsSection/animeRecommendationsSection";
import AnimeReviewsSection from "../animeReviewsSection/animeReviewsSection";
import SectionCharacters from "./characters/sectionCharacters";
import SectionRecommendations from "./recommendations/sectionRecommendations";
import SectionReviews from "./reviews/sectionReviews";
import SectionNavbar from "./sectionNavbar";
import SectionTop from "./top/sectionTop";

export default function AnimeInfoSection({ animeData, animeId }) {
  const characters = useCharactersData(animeId);
  const reviews = useReviewsData(animeId);
  const [recommendations] = useRecommendationsData(animeId);
  const [page, setPage] = useState("details");
  return (
    <section
      className="flex flex-col xl:block w-full xl:w-[75%] px-4 order-1 
		xl:order-2"
    >
      <SectionNavbar page={page} setPage={setPage} />
      {page == "details" && (
        <>
          <SectionTop animeData={animeData} />

          <SectionCharacters characters={characters} />

          <SectionReviews key={animeId} reviews={reviews} />
          {recommendations && (
            <SectionRecommendations
              setPage={setPage}
              initialRecommendations={recommendations.slice(0, 21)}
            />
          )}
        </>
      )}
      {page == "characters" && (
        <AnimeCharactersSection characters={characters} />
      )}
      {page == "reviews" && <AnimeReviewsSection reviews={reviews} />}
      {page == "recommendations" && (
        <AnimeRecommendationsSection recommendations={recommendations} />
      )}
    </section>
  );
}
