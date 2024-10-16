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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSearchIsActive(true);
    setIsLoading(true);
    let ignore = false;

    async function getSearchTerms() {
      const URL = `${ENDPOINT}?q=${parseQuery(query)}&limit=6&sfw=true`;
      if (query && !ignore) {
        const data = await getData(URL);
        const results = data.data;
        setResultsData(results);
        setIsLoading(false);
      }
    }

    // Only fetches if the query hasn't changed for x ms
    // Might be worth increasing if users are slow typers
    const timeoutId = setTimeout(getSearchTerms, 500);
    return () => {
      ignore = true;
      clearTimeout(timeoutId);
    };
  }, [query]);

  console.log("isLoading", isLoading);

  return { query, setQuery, resultsData, isLoading };
}
