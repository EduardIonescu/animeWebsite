import SearchBarResults from "./searchBarResults";
import { useState, useRef } from "react";
import { useSearchData } from "../../../hooks/useSearchData";

export default function SearchBar() {
	const [searchIsActive, setSearchIsActive] = useState(false);
	const [query, setQuery, resultsData] = useSearchData(setSearchIsActive);
	const searchRef = useRef(null);

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
