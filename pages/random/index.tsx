import AnimeInfo from "../../components/animeInfo/animeInfo";
import Loading from "../../components/other/loading";
import { useAnimeIdData, useRandomId } from "../../hooks/useAnimeIdData";

export default function Random() {
  const randomId = useRandomId();
  const randomData = useAnimeIdData(randomId);
  console.log("randomData", randomId);
  if (randomData && randomId)
    return <AnimeInfo animeData={randomData} animeId={randomId} />;
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
