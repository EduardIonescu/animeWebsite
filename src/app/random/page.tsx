import AnimeInfo from "@/components/animeInfo/animeInfo";
import Loading from "@/components/other/loading";
import { getData } from "@/lib/getData";

const randomURL = `https://api.jikan.moe/v4/random/anime`;

export default async function Random() {
  const randomId = (await getData(randomURL))?.data.mal_id as
    | number
    | undefined;

  const url = `https://api.jikan.moe/v4/anime/${randomId}/full`;
  const randomData = (await getData(url))?.data;

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
