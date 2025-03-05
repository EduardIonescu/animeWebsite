"use client";

import calendarIcon from "@/../public/icons/calendar-icon.svg";
import starIcon from "@/../public/icons/star-icon.svg";
import { Episode } from "@/types/episode";
import Image from "next/image";
import Link from "next/link";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  const imageUrl = episode.anime.image_url;
  const title = episode.anime.title;
  const titleJapanese = episode.anime.titleJapanese;
  const score = episode.score * 2;
  const mal_id = episode.anime.mal_id;

  const aired = new Date(episode.aired);
  const date =
    aired.getDate().toString().padStart(2, "0") +
    "/" +
    (aired.getMonth() + 1).toString().padStart(2, "0");

  const lastEpisode =
    episode.mal_id.toString().padStart(2, "0") +
    "/" +
    episode.anime.episodes_count.toString().toString().padStart(2, "0");

  return (
    <>
      <Link href={`/anime/${mal_id}`} className="lg:group">
        <article
          /* card class for linear-gradient background transition */
          className="card lg:hidden w-[100%] md:w-[21rem] border-[1px] 
        flex items-center transition max-w-[calc(100vw-32px)] sm:max-w-[512px]
			  duration-300 gap-4 shadow-md hover:-translate-x-[1px] relative
			  hover:-translate-y-[2px] cursor-pointer hover:shadow-xl group rounded 
			  overflow-hidden dark:bg-darkBlueDark dark:border-darkBlue 
			dark:hover:shadow-black/30 dark:hover:shadow-lg "
        >
          <div className="relative h-[120px] w-[85px] shrink-0">
            <Image
              src={imageUrl}
              fill
              sizes="100%"
              alt=""
              aria-hidden="true"
              className="object-cover "
            />
          </div>
          {/* Maybe switch whitespace-nowrap to line-clamp */}
          <div className="whitespace-nowrap overflow-hidden pb-1">
            <div
              className="absolute top-0 text-[11px] bg-darkBlue/75
				text-shadowLightBlue flex items-center gap-1 py-[2px] px-1 rounded-b-md
				"
            >
              <div className="w-[11px] h-[11px] relative shrink-0 mb-[1px]">
                <Image
                  src={starIcon}
                  fill
                  sizes="100%"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              {score}
            </div>
            <div
              className="absolute top-0 right-0 text-[11px] bg-lighterBlue 
				text-shadowLightBlue flex items-center gap-1 py-[2px] px-1 rounded-bl-md"
            >
              <div className="h-[10px] w-[10px] relative">
                <Image
                  src={calendarIcon}
                  fill
                  sizes="100%"
                  alt=""
                  aria-hidden="true"
                  className="h-auto"
                />
              </div>{" "}
              {date}
            </div>

            <div
              className="absolute bottom-0 left-0 text-[11px] bg-darkBlue/75 z-10
				text-shadowLightBlue flex items-center gap-1 py-[2px] px-1 rounded-tr-md"
            >
              Ep {lastEpisode}
            </div>

            <h2 className="text-base font-medium">{title ?? titleJapanese}</h2>
            <p className="text-sm opacity-60">{titleJapanese}</p>
          </div>
        </article>

        <article
          className="hidden lg:block w-[280px] relative group transition-all 
      duration-200 ease"
        >
          <div
            className="absolute left-2 -bottom-1 w-64 text-base font-medium 
        group-hover:text-lighterBlue dark:group-hover:text-darkYellow 
        transition-colors duration-200"
          >
            <h2
              className="inline-block -rotate-90 absolute bottom-28 text-base  
            w-52 -left-24 text-ellipsis text-nowrap overflow-hidden whitespace-nowrap 
            pl-3 pt-1.5"
            >
              {title ?? titleJapanese}
            </h2>
          </div>

          <div
            className="relative w-48 h-72 shrink-0 ml-10 block shadow-black 
          shadow-md group-hover:shadow-lg group-hover:shadow-black transition-all 
          duration-300 ease-out group-hover:scale-[101%] rounded-md overflow-hidden"
          >
            <div
              className="absolute top-0 text-xs bg-darkBlue/90 z-10 pt-1
				text-shadowLightBlue flex items-center gap-1 py-[2px] px-1 rounded-br-md
				"
            >
              <div className="w-[11px] h-[11px] relative shrink-0 mb-[1px]">
                <Image
                  src={starIcon}
                  fill
                  sizes="100%"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              {score}
            </div>
            <div
              className="absolute top-0 right-0 text-xs bg-lighterBlue/90 pt-1 
             text-shadowLightBlue flex items-center gap-1 py-[2px] px-1 z-10
              rounded-bl-md"
            >
              <div className="h-[10px] w-[10px] relative">
                <Image
                  src={calendarIcon}
                  fill
                  sizes="100%"
                  alt=""
                  aria-hidden="true"
                  className="h-auto"
                />
              </div>{" "}
              {date}
            </div>

            <div
              className="absolute bottom-0 left-0 text-sm bg-darkBlue/80 
            text-shadowLightBlue flex items-center gap-1 py-1 px-1.5 z-10
             rounded-tr-md"
            >
              Ep {lastEpisode}
            </div>

            <Image
              src={imageUrl}
              fill
              sizes="100%"
              alt=""
              aria-hidden="true"
              className="object-cover"
            />

            <div></div>
          </div>
        </article>
      </Link>
    </>
  );
}
