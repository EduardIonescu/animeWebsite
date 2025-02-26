import AnimeInfo from "@/components/animeInfo/animeInfo";
import Loading from "@/components/other/loading";
import { getData, getDataById } from "@/lib/getData";

const randomURL = `https://api.jikan.moe/v4/random/anime`;

export default async function Random() {
  const randomId = (await getData(randomURL))?.data.mal_id as
    | number
    | undefined;

  if (!randomId) {
    return (
      <main
        className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
			xl:w-[75rem] mx-auto -mb-14"
      >
        Not Found
      </main>
    );
  }

  const { data, error } = await getDataById(randomId);

  if (data && randomId)
    return <AnimeInfo animeData={data} animeId={randomId} />;
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
