import { useEffect, useState } from "react";
import getData from "../lib/getData";

// I want 50 items, the limit is 25 per page
const popularAnimeUrls = [
	"https://api.jikan.moe/v4/top/anime?tv",
	"https://api.jikan.moe/v4/top/anime?tv&page=2",
];
const trendingAnimeUrls = [
	"https://api.jikan.moe/v4/seasons/now",
	"https://api.jikan.moe/v4/seasons/now?page=2",
];

export default function useTopAnimeData(type = "popular") {
	const [animeData, setAnimeData] = useState([]);

	useEffect(() => {
		let ignore = false;
		const urls = type == "popular" ? popularAnimeUrls : trendingAnimeUrls;
		async function startFetching() {
			const data = await Promise.all(
				urls.map(async (url) => {
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
	}, []);

	return animeData;
}
