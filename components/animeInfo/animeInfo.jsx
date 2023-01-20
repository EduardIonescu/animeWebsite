import AnimeInfoAside from "./animeInfoAside/animeInfoAside";
import AnimeInfoSection from "./animeInfoSection/animeInfoSection";
export default function AnimeInfo({ animeData, animeId }) {
	const titleEnglish = animeData && animeData.title_english,
		title = animeData && animeData.title;

	return (
		<main
			className="w-[75rem] h-[100%] mx-auto pb-8 bg-shadowLightBlue
  text-shadowDarkBlue flex flex-wrap dark:bg-veryDarkBlue 
	dark:text-veryLightGray"
		>
			<nav
				className="w-full  bg-[#B0C4DE] px-4 py-2 shadow-sm relative mb-4
       shadow-blue-400/50 border-b-[1px] border-shadowDarkBlue/50
			 dark:bg-black/25 dark:shadow-blue-400/20 "
			>
				<h1 className="font-bold text-lg">{titleEnglish}</h1>
				<h2 className="opacity-70 text-base">{title}</h2>
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
