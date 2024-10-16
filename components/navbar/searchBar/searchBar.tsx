import React, { useRef, useState } from "react";
import { useSearchData } from "../../../hooks/useSearchData";
import SearchBarResults from "./searchBarResults";

export default function SearchBar() {
  const [searchIsActive, setSearchIsActive] = useState<boolean>(false);
  const { query, setQuery, resultsData, isLoading } =
    useSearchData(setSearchIsActive);
  const searchRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
  }
  return (
    <article className=" w-full lg:w-80 relative">
      <input
        ref={searchRef}
        onInput={handleChange}
        type="text"
        placeholder="Search anime..."
        maxLength={32}
        className="
    h-12 lg:h-10  w-full pl-5 pr-2 border-[2px] border-darkBlue rounded-full 
		bg-white dark:bg-transparent dark:border-shadowLightBlue/90
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
          isLoading={isLoading}
        />
      )}
    </article>
  );
}
