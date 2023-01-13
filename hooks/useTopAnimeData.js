import { useEffect, useState } from "react";
import getData from "./getData";

// I want 50 items, the limit is 25
const popularAnimeUrl1 = "https://api.jikan.moe/v4/top/anime?tv";
// Remove comment later, it makes development harder because request are limited
//const popularAnimeUrl2 = "https://api.jikan.moe/v4/top/anime?tv&page=2";

const trendingAnimeUrl = "https://api.jikan.moe/v4/seasons/now";

export default function useTopAnimeData(showTrending) {
	const [animeData, setAnimeData] = useState([]);

	useEffect(() => {
		let ignore = false;
		const url = showTrending ? trendingAnimeUrl : popularAnimeUrl1;

		async function startFetching() {
			const data1 = await getData(url);
			//			const data2 = await fetchData(topAnimeUrl2);
			if (!ignore) {
				setAnimeData([...data1.data /*...data2.data*/]);
			}
		}

		startFetching();

		return () => {
			ignore = true;
		};
	}, [showTrending]);

	return animeData;
}
