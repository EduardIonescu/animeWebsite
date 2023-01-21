import { useEffect, useState } from "react";
import { parseQuery } from "../lib/search";
import getData from "../lib/getData";

export function useSearchData(setSearchIsActive) {
	const [query, setQuery] = useState("");
	const [resultsData, setResultsData] = useState(false);

	useEffect(() => {
		setSearchIsActive(true);
		let ignore = false;

		async function getSearchTerms() {
			const animepaheURL = `https://api.consumet.org/anime/animepahe/${parseQuery(
				query
			)}`;
			if (query && !ignore) {
				const data = await getData(animepaheURL);
				const results = data.results;
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

	return [query, setQuery, resultsData];
}
