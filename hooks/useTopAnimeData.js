import { useEffect, useState } from "react";
import getData from "../lib/getData";

// I want 50 items, the limit is 25 per page
const popularAnimeUrls = [
	"https://api.jikan.moe/v4/top/anime?tv",
	"https://api.jikan.moe/v4/top/anime?tv?page=2",
];
const trendingAnimeUrls = [
	"https://api.jikan.moe/v4/seasons/now",
	"https://api.jikan.moe/v4/seasons/now?page=2",
];

export default function useTopAnimeData(showTrending) {
	const [animeData, setAnimeData] = useState([]);

	useEffect(() => {
		let ignore = false;
		const urls = showTrending ? trendingAnimeUrls : popularAnimeUrls;

		async function startFetching() {
			const data = await Promise.all(
				urls.map(async (url) => {
					// API allows only 3 requests per second so I have to delay requests
					// React strict doubles my requests, making them 4 instead of 2
					// Remove next line on deployment
					return await getData(url);
				})
			);

			if (!ignore) {
				setAnimeData([...data[0].data, ...data[1].data]);
			}
		}

		startFetching();

		return () => {
			ignore = true;
		};
	}, [showTrending]);

	return animeData;
}
