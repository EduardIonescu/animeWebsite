import AnimeCard from "@/components/animeCard";
import { HomeLayout } from "@/components/home";
import { getHomeData } from "../lib/getData";

// 24H
export const revalidate = 86400;

export default async function Page() {
  const { popularAnimeData } = await getHomeData();

  return (
    <HomeLayout view={"popular"}>
      {popularAnimeData.map((animeData, index) => (
        <AnimeCard key={index} animeData={animeData} index={index} />
      ))}
    </HomeLayout>
  );
}
