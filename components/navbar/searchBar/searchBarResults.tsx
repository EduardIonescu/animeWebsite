import Image from "next/image";
import Link from "next/link";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";
import { IsAnimeData } from "../../../constants/interfacesAndTypes";
import { LoadingSpinner } from "../../other/loading";

type SearchBarResultsProps = {
  resultsData: IsAnimeData[] | undefined;
  setSearchIsActive: Dispatch<SetStateAction<boolean>>;
  searchRef: RefObject<HTMLInputElement>;
  isLoading: boolean;
};

export default function SearchBarResults({
  resultsData,
  setSearchIsActive,
  searchRef,
  isLoading,
}: SearchBarResultsProps) {
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(e.target) &&
        !searchRef.current?.contains(e.target)
      )
        setSearchIsActive(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [resultsRef, searchRef, setSearchIsActive]);

  return (
    <div
      onClick={() => setSearchIsActive(false)}
      className="absolute z-20 text-darkBlue bg-transparent dark:text-veryLightGray
			px-4 w-full top-12 xl:top-10 "
      ref={resultsRef}
    >
      {resultsData && !isLoading ? (
        <ul className="bg-white dark:bg-darkBlueDark overflow-hidden rounded">
          {resultsData.map((result, index) => (
            <Link
              href={`/anime/${result.mal_id}`}
              key={result.mal_id + index.toString()}
              className=" mb-1 cursor-pointer group flex items-center gap-2
							bg-black/0 hover:bg-black/5 transition duration-200"
            >
              <div
                className="relative w-12 h-12 transition-all duration-200 
							shrink-0 group-hover:h-24"
              >
                <Image
                  className="object-cover"
                  src={result.images.webp.image_url}
                  fill
                  sizes="100%"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <div
                className="py-1 text-[10px] whitespace-pre 
								group-hover:whitespace-normal"
              >
                <p className="text-lighterBlue text-[11px]">{result.title}</p>
                <p className="group-hover:hidden">
                  ({result.type}, {result.aired.string})
                </p>
                <p className="hidden group-hover:block opacity-50">
                  Aired: {result.aired.string}
                </p>
                <p className="hidden group-hover:block opacity-50">
                  Score: {result.rating}
                </p>
              </div>
            </Link>
          ))}
        </ul>
      ) : (
        <div
          className="bg-white dark:bg-darkBlueDark overflow-hidden
				rounded py-8"
        >
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
