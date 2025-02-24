"use client";

import popularIcon from "@/../public/icons/popular-icon.svg";
import trendingIcon from "@/../public/icons/trending-icon.svg";
import Image from "next/image";
import { useState } from "react";
import TopAnimeSection from "./topAnimeSection";

function Home({
  popularAnimeData,
  trendingAnimeData,
}: {
  popularAnimeData: any;
  trendingAnimeData: any;
}) {
  const [trending, setTrending] = useState<boolean>(false);
  const handleTrending = () => setTrending(true);
  const handlePopular = () => setTrending(false);

  return (
    <main
      className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
			xl:w-[75rem] h-[100%] -mb-14
			mx-auto py-4 px-4 bg-shadowLightBlue dark:bg-veryDarkBlue
			 dark:text-veryLightGray text-shadowDarkBlue"
    >
      <nav className="flex gap-5 mb-6 ml-2">
        <button
          onClick={handlePopular}
          className={`flex items-center gap-1 relative
					before:content-[''] before:absolute before:block before:w-full
              before:-bottom-2 md:before:-bottom-2 before:h-[3px] before:left-0
              before:scale-x-0 before:transition-transform before:duration-300
							before:bg-lighterBlue dark:text-veryLightGray
      ${
        !trending
          ? "text-darkBlue before:scale-x-100"
          : "text-darkBlue before:opacity-50 hover:before:scale-x-100"
      }`}
        >
          <div
            className="relative shrink-0 w-[16px] h-[16px] 
					"
          >
            <Image
              src={popularIcon}
              fill
              sizes="100%"
              alt=""
              aria-hidden="true"
            />
          </div>{" "}
          Popular
        </button>
        <button
          onClick={handleTrending}
          className={`flex items-center gap-1 relative
					before:content-[''] before:absolute before:block before:w-full
              before:-bottom-2 md:before:-bottom-2 before:h-[3px] before:left-0
              before:scale-x-0 before:transition-transform before:duration-300
							before:bg-lighterBlue dark:text-veryLightGray
      ${
        trending
          ? "text-darkBlue before:scale-x-100"
          : "text-darkBlue before:opacity-50 hover:before:scale-x-100"
      }`}
        >
          <div className="relative shrink-0 w-4 h-4">
            <Image
              src={trendingIcon}
              fill
              sizes="100%"
              alt=""
              aria-hidden="true"
            />
          </div>{" "}
          Trending
        </button>
      </nav>

      <TopAnimeSection
        showTrending={trending}
        popularAnimeData={popularAnimeData}
        trendingAnimeData={trendingAnimeData}
      />
    </main>
  );
}

export default Home;
