import AnimeCard from "@/components/animeCard";
import { HomeLayout } from "@/components/home";
import { getHomeData } from "@/lib/getData";
import { setTimeout } from "node:timers/promises";

// 24H
export const revalidate = 86400;

export default async function Page() {
  // Delay to avoid rate limiting
  await setTimeout(1000);
  const { trendingAnimeData } = await getHomeData();

  return (
    <HomeLayout view={"trending"}>
      {trendingAnimeData.map((animeData, index) => (
        <AnimeCard key={index} animeData={animeData} index={index} />
      ))}
    </HomeLayout>
  );
}
