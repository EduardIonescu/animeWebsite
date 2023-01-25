import getData from "../lib/getData";
import { useEffect, useState } from "react";
export function useAnimeIdData(animeId: number) {
	const [animeData, setAnimeData] = useState(false);
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
	return animeData;
}

const randomURL = `https://api.jikan.moe/v4/random/anime`;
export function useRandomId() {
	const [randomId, setRandomId] = useState<number | boolean>(false);
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
	if (typeof randomId === "number") return randomId;
}