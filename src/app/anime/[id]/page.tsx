import AnimeInfo from "@/components/animeInfo/animeInfo";
import { getDataById } from "@/lib/getData";
import { setTimeout } from "node:timers/promises";

// export const revalidate = 86400;

// // Need generateStaticParams and dynamicParams for caching to work on dynamic pages
// export const dynamicParams = true;
// export async function generateStaticParams(asd: any) {
//   console.log(await asd);
//   return [];
// }

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  await setTimeout(1000);
  console.log("id", id);
  if (!id || !Number(id)) {
    return (
      <main
        className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
			xl:w-[75rem] mx-auto -mb-14"
      >
        Not Found
      </main>
    );
  }

  const data = await getDataById(Number(id));

  if (!data) {
    return (
      <main
        className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
			xl:w-[75rem] mx-auto -mb-14"
      >
        Not Found
      </main>
    );
  }

  return <AnimeInfo animeData={data} animeId={id} />;
}
