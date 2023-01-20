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
				{console.log(animeData)}
			</>
		);
	/* Add loading page */ else
		return (
			<main className="w-[75vw] mx-auto">
				<Loading />
			</main>
		);
}
