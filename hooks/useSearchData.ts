import { useEffect, useState } from "react";
import { IsAnimeData } from "../constants/interfacesAndTypes";
import getData from "../lib/getData";
import { parseQuery } from "../lib/search";

const ENDPOINT = "https://api.jikan.moe/v4/anime";

export function useSearchData(setSearchIsActive: Function) {
  const [query, setQuery] = useState("");
  const [resultsData, setResultsData] = useState<IsAnimeData[] | undefined>(
    undefined
  );

  useEffect(() => {
    setSearchIsActive(true);
    let ignore = false;

    async function getSearchTerms() {
      const animepaheURL = `${ENDPOINT}?q=${parseQuery(
        query
      )}&limit=8&sfw=true`;
      if (query && !ignore) {
        const data = await getData(animepaheURL);
        const results = data.data;
        console.log("results", results);
        setResultsData(results);
      }
    }

    // Only fetches if the query hasn't changed for x ms
    // Might be worth increasing if users are slow typers
    const timeoutId = setTimeout(getSearchTerms, 300);
    return () => {
      ignore = true;
      clearTimeout(timeoutId);
    };
  }, [query]);

  return { query, setQuery, resultsData };
}
