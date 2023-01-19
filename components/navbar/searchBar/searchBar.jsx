import SearchBarResults from "./searchBarResults";
import { useState, useEffect, useRef } from "react";
import getData from "../../../lib/getData";

export default function SearchBar() {
	const [query, setQuery] = useState("");
	const [searchIsActive, setSearchIsActive] = useState(false);
	const [resultsData, setResultsData] = useState(false);
	const searchRef = useRef(null);

	useEffect(() => {
		setSearchIsActive(true);
		let ignore = false;
		const regex = /[A-Za-z\s\d]/g;
		function parseQuery(inputQuery) {
			const searchableQuery =
				inputQuery &&
				inputQuery
					.match(regex)
					.join("")
					.replaceAll(" ", "+")
					.toLowerCase();
			return searchableQuery;
		}

		async function getSearchTerms() {
			const animepaheURL = `https://api.consumet.org/anime/animepahe/${parseQuery(
				query
			)}`;
			const data = await getData(animepaheURL);
			console.log("url", animepaheURL);

			const results = await data.results
				.sort((a, b) => (a.rating > b.rating ? -1 : 1))
				.map((result) => result.title)
				.slice(0, 8);

			const parsedResults = results
				.map((item) => parseQuery(item))
				.join(",");
			console.log("parsedResults", parsedResults);
			return parsedResults;
		}

		async function startFetching() {
			if (query) {
				const searchableQuery = await getSearchTerms();
				const url = `https://api.jikan.moe/v4/anime?sfw&type=tv&q=${searchableQuery}&limit=10`;
				console.log("url searchable", url);
				if (query) {
					const data = await getData(url);
					if (!ignore) {
						setResultsData(data.data.slice(0, 8));
					}
				}
			}
		}
		// Only fetches if the query hasn't changed
		const timeoutId = setTimeout(startFetching, 500);
		return () => {
			ignore = true;
			clearTimeout(timeoutId);
		};
	}, [query]);
	function handleChange(e) {
		setQuery(e.target.value);
	}
	return (
		<article className="ml-auto relative">
			{console.log(query)}
			<input
				ref={searchRef}
				onInput={handleChange}
				type="text"
				placeholder="Search anime..."
				maxLength={32}
				className="
    h-10 w-80 pl-5 pr-2 border-[2px] border-darkBlue rounded-full 
    focus:outline-none transition duration-300 focus:border-lighterBlue
    hover:border-lighterBlue text-darkBlue text-sm"
			/>
			{query && searchIsActive && (
				<SearchBarResults
					key={query}
					resultsData={resultsData}
					setSearchIsActive={setSearchIsActive}
					searchRef={searchRef}
				/>
			)}
		</article>
	);
}
