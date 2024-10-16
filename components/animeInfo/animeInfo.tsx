import { IsAnimeData } from "../../constants/interfacesAndTypes";
import AnimeInfoAside from "./animeInfoAside/animeInfoAside";
import AnimeInfoSection from "./animeInfoSection/animeInfoSection";
export default function AnimeInfo({
  animeData,
  animeId,
}: {
  animeData: IsAnimeData;
  animeId: number | string;
}) {
  const titleEnglish = animeData && animeData.title_english,
    title = animeData && animeData.title;

  return (
    <main
      className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
				xl:w-[75rem] h-[100%] mx-auto pb-8 bg-shadowLightBlue
			text-shadowDarkBlue flex flex-col xl:flex-row flex-wrap 
			dark:bg-veryDarkBlue -mb-14dark:text-veryLightGray"
    >
      <nav
        className="w-full bg-[#B0C4DE] px-4 py-2 shadow-sm relative mb-4
       shadow-blue-400/50 border-b-[1px] border-shadowDarkBlue/50
			 dark:bg-black/25 dark:shadow-blue-400/20 "
      >
        {titleEnglish == title ? (
          <h1 className="font-bold text-lg">{titleEnglish}</h1>
        ) : (
          <>
            <h1 className="font-bold text-lg">{titleEnglish}</h1>
            <h2 className="opacity-70 text-base">{title}</h2>
          </>
        )}
      </nav>
      <AnimeInfoAside key={`aside-${animeId}`} animeData={animeData} />
      <AnimeInfoSection
        key={`section-${animeId}`}
        animeData={animeData}
        animeId={animeId}
      />
    </main>
  );
}
