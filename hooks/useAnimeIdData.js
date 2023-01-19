import getData from "../lib/getData";
import { useEffect, useState } from "react";
export function useAnimeIdData(animeId) {
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
	const [randomId, setRandomId] = useState(false);
	useEffect(() => {
		let ignore = false;
		async function startFetching() {
			const randomData = await getData(randomURL);
			if (!ignore) {
				console.log(randomData.data);
				setRandomId(randomData.data.mal_id);
			}
		}

		startFetching();
		return () => (ignore = true);
	}, []);
	return randomId;
}
