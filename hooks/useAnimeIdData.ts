import { useEffect, useState } from "react";
import { IsAnimeData } from "../constants/interfacesAndTypes";
import getData from "../lib/getData";
export function useAnimeIdData(animeId: number | string | undefined) {
  const [animeData, setAnimeData] = useState<boolean | IsAnimeData>(false);
  const url = `https://api.jikan.moe/v4/anime/${animeId}/full`;
  useEffect(() => {
    let ignore = false;

    if (!animeId) {
      return;
    }

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

export function useRandomId() {
  const [randomId, setRandomId] = useState<number | undefined>(undefined);
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
