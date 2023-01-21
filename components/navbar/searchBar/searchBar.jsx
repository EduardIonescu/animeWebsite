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
		<article className=" w-full lg:w-80">
			<input
				ref={searchRef}
				onInput={handleChange}
				type="text"
				placeholder="Search anime..."
				maxLength={32}
				className="
    h-12 lg:h-10  w-full pl-5 pr-2 border-[2px] border-darkBlue rounded-full 
		bg-white dark:bg-transparent
    focus:outline-none transition duration-300 focus:border-lighterBlue
    hover:border-lighterBlue text-darkBlue text-sm dark:text-veryLightGray
		dark:placeholder:text-veryLightGray"
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
