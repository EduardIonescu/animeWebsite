import AnimeCard from "@/components/animeCard";
import EpisodeCard from "@/components/episodeCard";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { getAiring, getHomeData } from "../lib/getData";

// 24H
export const revalidate = 86400;

type View = "popular" | "trending" | "airing";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ view: string }>;
}) {
  const { popularAnimeData, trendingAnimeData } = await getHomeData();
  const airing = await getAiring(trendingAnimeData);

  let view: View = "popular";
  if (["trending", "airing"].includes((await searchParams).view)) {
    view = (await searchParams).view as View;
  }

  return (
    <HomeLayout view={view}>
      <section
        className="flex flex-wrap flex-col md:flex-row md:gap-4
            xl:gap-x-[calc((100%-(380px*3))/2)] gap-y-5 pb-6 lg:justify-between lg:gap-y-7"
      >
        {view !== "airing" &&
          (view === "popular" ? popularAnimeData : trendingAnimeData).map(
            (animeData, index) => (
              <AnimeCard key={index} animeData={animeData} index={index} />
            )
          )}

        {view === "airing" &&
          airing.map((episode, index) => (
            <EpisodeCard key={index} episode={episode} />
          ))}
      </section>
    </HomeLayout>
  );
}

const LINKS = ["popular", "trending", "airing"];
function HomeLayout({ view, children }: { view: View; children: ReactNode }) {
  return (
    <main
      className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
xl:w-[75rem] h-[100%] -mb-14
mx-auto py-4 px-4 bg-shadowLightBlue dark:bg-veryDarkBlue
 dark:text-veryLightGray text-shadowDarkBlue"
    >
      <nav className="flex gap-5 mb-6 ml-2">
        {LINKS.map((name) => (
          <HomeLink key={name} view={view} name={name} />
        ))}
      </nav>

      {children}
    </main>
  );
}

function HomeLink({ view, name }: { view: string; name: string }) {
  return (
    <Link
      href={name === "popular" ? "/" : `/?view=${name}`}
      className={`flex items-center gap-1 relative before:content-[''] 
        before:absolute before:block before:w-full before:-bottom-2 
        md:before:-bottom-2 before:h-[3px] before:left-0 before:scale-x-0 
        before:transition-transform before:duration-300 before:bg-lighterBlue 
        dark:text-veryLightGray
${
  view === name
    ? "text-darkBlue before:scale-x-100"
    : "text-darkBlue before:opacity-50 hover:before:scale-x-100"
}`}
    >
      <div className="relative shrink-0 w-4 h-4 ">
        <Image
          src={`/icons/${name}-icon.svg`}
          fill
          sizes="100%"
          alt=""
          aria-hidden="true"
        />
      </div>{" "}
      {name}
    </Link>
  );
}
