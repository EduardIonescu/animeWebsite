import { useEffect, useState } from "react";
import getData from "../lib/getData";

export function useCharactersData(animeId) {
	function handleCharacters(data) {
		return data.data

			.sort((a, b) => (a.favorites > b.favorites ? 1 : -1))
			.sort((a, b) => (a.role > b.role ? 1 : -1))
			.slice(0, 15);
	}
	return useAnimeData(animeId, "characters", handleCharacters);
}

export function useReviewsData(animeId) {
	function handleReviews(data) {
		// Max 15
		if (data.data.length >= 3) return data.data.slice(0, 15);
		else return data.data;
	}
	return useAnimeData(animeId, "reviews", handleReviews);
}

export function useRecommendationsData(animeId) {
	function handleRecommendations(data) {
		if (data.data.length >= 21) return data.data.slice(0, 40);
		else return data.data.slice(0, 8);
	}
	return useAnimeData(
		animeId,
		"recommendations",
		handleRecommendations,
		true
	);
}

export function useAnimeData(animeId, section, callback, setter = false) {
	const [data, setData] = useState(false);
	useEffect(() => {
		let ignore = false;

		async function startFetching() {
			const data = await getData(
				`https://api.jikan.moe/v4/anime/${animeId}/${section}`
			);

			if (!ignore) {
				setData(callback(data));
			}
		}

		if (animeId) {
			startFetching();
		}
		return () => {
			ignore = true;
		};
	}, [animeId]);

	if (setter) return [data, setData];
	else return data;
}
