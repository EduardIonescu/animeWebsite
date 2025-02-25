"use client";

import ResultsSection from "@/components/listPage/resultsSection";
import SelectForm from "@/components/listPage/selectForm";
import { LoadingSpinner } from "@/components/other/loading";
import { getData } from "@/lib/getData";
import { Query, QueryObject } from "@/types/list";
import { IsAnimeData } from "@/types/types";
import { useState } from "react";

export default function List() {
  const [filterData, setFilterData] = useState<IsAnimeData[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function fetchFilterData(
    genres: Query,
    ratings: Query,
    year: Query,
    status: Query,
    score: Query,
    order: Query
  ) {
    if (genres || ratings || year || status || score || order) {
      const url = getAllQueriesURL(genres, ratings, year, status, score, order);
      const data = await getData(url);
      setLoading(false);
      setFilterData(data.data);
    }
  }

  return (
    <main
      className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
			xl:w-[75rem] h-[100%] mx-auto py-4 px-4 bg-shadowLightBlue 
			dark:bg-veryDarkBlue -mb-14
			dark:text-veryLightGray text-shadowDarkBlue min-h-[calc(100vh-64px)]"
    >
      <SelectForm
        fetchFilterData={fetchFilterData}
        setFilterData={setFilterData}
        setLoading={setLoading}
        setError={setError}
      />

      <p
        aria-hidden={!error}
        className={`text-center text-darkRed transition duration-200 select-none
				ease-out ${error ? "opacity-100" : " opacity-0"}`}
      >
        Please select filters...
      </p>
      <hr className="mt-2 mb-4 dark:border-coolBlack" />
      {loading ? (
        <LoadingSpinner />
      ) : filterData && filterData.length >= 1 ? (
        <ResultsSection resultsData={filterData} />
      ) : (
        typeof filterData == "object" && (
          <section className="text-center text-lg xl:text-xl font-medium">
            No results found...
          </section>
        )
      )}
    </main>
  );
}

function mapQuery(queryName: string, queryArray: QueryObject[] | QueryObject) {
  if (typeof queryArray === "object" && "value" in queryArray) {
    return `${queryName}=${queryArray.value}&`;
  }
  if (Array.isArray(queryArray) && queryArray.length >= 1) {
    const array = queryArray.map((q) => q.value);
    const string = `${queryName}=${array.join(",")}&`;
    return string;
  }

  return "";
}

// makes the url clean
function mapAllQueries(
  genres: Query,
  ratings: Query,
  year: Query,
  status: Query,
  score: Query,
  order: Query
): string {
  return `sfw=true&type=tv&${genres && mapQuery("genres", genres)}${
    ratings && mapQuery("rating", ratings)
  }${year && mapQuery("start_date", year)}${
    status && mapQuery("status", status)
  }${score && mapQuery("min_score", score)}${
    order && mapQuery("order_by", order)
  }`;
}
function getAllQueriesURL(
  genres: Query,
  ratings: Query,
  year: Query,
  status: Query,
  score: Query,
  order: Query
): string {
  const url = `https://api.jikan.moe/v4/anime?${mapAllQueries(
    genres,
    ratings,
    year,
    status,
    score,
    order
  )}`;
  return url;
}
