import { useRouter } from "next/router";
import AnimeInfo from "../../components/animeInfo/animeInfo";
import { useAnimeIdData } from "../../hooks/useAnimeIdData";
export default function Anime() {
	const animeId = useRouter().query.id;
	const animeData = useAnimeIdData(animeId);

	if (animeData)
		return (
			<AnimeInfo
				key={`id-${animeId}`}
				animeData={animeData}
				animeId={animeId}
			/>
		);
	/* Add loading page */ else return <main>Loading...</main>;
}
