import AnimeInfo from "../../components/animeInfo/animeInfo";
import { useAnimeIdData, useRandomId } from "../../hooks/useAnimeIdData";

export default function Random() {
	const randomId = useRandomId();
	const randomData = useAnimeIdData(randomId);
	if (randomData)
		return <AnimeInfo animeData={randomData} animeId={randomId} />;
	else return <main>Loading...</main>;
}
