import Home from "@/components/home";
import { getHomeData } from "../lib/getData";

// 12H
export const revalidate = 43200;

export default async function Page() {
  const { popularAnimeData, trendingAnimeData } = await getHomeData();

  return (
    <Home
      popularAnimeData={popularAnimeData}
      trendingAnimeData={trendingAnimeData}
    />
  );
}
