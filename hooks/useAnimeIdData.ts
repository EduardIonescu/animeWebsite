import getData from "../lib/getData";
import { useEffect, useState } from "react";
import { AnimeDataAll } from "../constants/interfacesAndTypes";
export function useAnimeIdData(animeId: number | string | undefined) {
	const [animeData, setAnimeData] = useState<boolean | AnimeDataAll>(false);
	const url = `https://api.jikan.moe/v4/anime/${animeId}/full`;
	useEffect(() => {
		let ignore = false;

		async function startFetching() {
			const data = await getData(url);
			if (!ignore) {
				setAnimeData(data.data);
			}
		}
		if (animeId) {
			startFetching();
		}
		return () => {
			ignore = true;
			setAnimeData(false);
		};
	}, [animeId]);
	if (typeof animeData === "object") return animeData;
}

const randomURL = `https://api.jikan.moe/v4/random/anime`;
export function useRandomId(): number {
	const [randomId, setRandomId] = useState<number>(1);
	useEffect(() => {
		let ignore = false;
		async function startFetching() {
			const randomData = await getData(randomURL);
			if (!ignore) {
				setRandomId(randomData.data.mal_id);
			}
		}

		startFetching();
		return () => {
			ignore = true;
		};
	}, []);
	return randomId;
}
