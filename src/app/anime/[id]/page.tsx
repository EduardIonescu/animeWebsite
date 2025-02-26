import AnimeInfo from "@/components/animeInfo/animeInfo";
import { getDataById } from "@/lib/getData";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  if (!id || !Number(id)) {
    notFound();
  }

  const { data, error } = await getDataById(Number(id));
  if (error === 404) {
    notFound();
  }
  if (!data) {
    throw new Error("Too many requests");
  }

  return <AnimeInfo animeData={data} />;
}
