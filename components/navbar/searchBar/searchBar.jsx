import SearchBarResults from "./searchBarResults";
import { useState, useEffect } from "react";
import getData from "../../../lib/getData";
export default function SearchBar() {
	const [query, setQuery] = useState("");
	const [resultsData, setResultsData] = useState(false);

	useEffect(() => {
		let ignore = false;

		const url = `https://api.jikan.moe/v4/anime?sfw&type=tv&q=${query}&order_by=rank&limit=10`;
		console.log("url", url);
		async function startFetching() {
			const data = await getData(url);
			if (!ignore) {
				setResultsData(data);
			}
		}
		startFetching();
		return () => (ignore = true);
	}, [query]);
	function handleChange(e) {
		setQuery(e.target.value);
	}
	return (
		<article className="ml-auto relative">
			{console.log(query)}
			<input
				onInput={handleChange}
				type="text"
				placeholder="Search anime..."
				maxLength={32}
				className="
    h-10 w-80 pl-5 pr-2 border-[2px] border-darkBlue rounded-full 
    focus:outline-none transition duration-300 focus:border-lighterBlue
    hover:border-lighterBlue text-darkBlue text-sm"
			/>
			{query && <SearchBarResults resultsData={resultsData} />}
		</article>
	);
}
