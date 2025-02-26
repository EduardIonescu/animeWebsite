import AnimeInfo from "@/components/animeInfo/animeInfo";
import { getDataRandom } from "@/lib/getData";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Random() {
  const { data, error } = await getDataRandom();

  if (error === 404) {
    notFound();
  }

  if (!data) {
    throw new Error("Too many requests");
  }

  return <AnimeInfo animeData={data} />;
}
