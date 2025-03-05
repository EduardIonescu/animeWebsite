import EpisodeCard from "@/components/episodeCard";
import { HomeLayout } from "@/components/home";
import { getAiring, getHomeData } from "@/lib/getData";
import { setTimeout } from "node:timers/promises";

// 12H
export const revalidate = 43200;

export default async function Page() {
  // Delay to avoid rate limiting
  await setTimeout(2000);
  const { trendingAnimeData } = await getHomeData();
  const airing = await getAiring(trendingAnimeData);

  return (
    <HomeLayout view={"airing"}>
      {airing.map((episode, index) => (
        <EpisodeCard key={index} episode={episode} />
      ))}
    </HomeLayout>
  );
}
