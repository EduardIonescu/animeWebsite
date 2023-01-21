import { useRouter } from "next/router";
import AnimeInfo from "../../components/animeInfo/animeInfo";
import { useAnimeIdData } from "../../hooks/useAnimeIdData";
import Loading from "../../components/other/loading";
export default function Anime() {
	const animeId = useRouter().query.id;
	const animeData = useAnimeIdData(animeId);

	if (animeData)
		return (
			<>
				<AnimeInfo
					key={`id-${animeId}`}
					animeData={animeData}
					animeId={animeId}
				/>
			</>
		);
	else
		return (
			<main
				className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
			xl:w-[75rem] mx-auto -mb-14"
			>
				<Loading />
			</main>
		);
}
