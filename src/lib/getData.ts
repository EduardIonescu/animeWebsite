import { IsAnimeData } from "@/types/types";

function delay(t: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

const REFETECH = {
  DELAY: 200,
  RETRIES: 40,
};
export async function getData(url: string, retries = REFETECH.RETRIES) {
  try {
    const res = await fetch(url);
    if (res.ok) return res.json();

    throw new Error(`${res.status}`);
  } catch (error) {
    if (retries > 0) {
      // limited requests per second
      await delay(REFETECH.DELAY);
      return await getData(url, retries - 1);
    }
  }
}

export async function getHomeData() {
  const popularAnimeUrls = [
    "https://api.jikan.moe/v4/top/anime?tv&limit=20",
    // "https://api.jikan.moe/v4/top/anime?tv&page=2&limit=20",
  ];
  const trendingAnimeUrls = [
    "https://api.jikan.moe/v4/seasons/now?limit=20",
    // "https://api.jikan.moe/v4/seasons/now?page=2&limit=20",
  ];
  // I want 40 items, the limit is 25 per page
  const popularAnimeDataTemp = await Promise.all(
    popularAnimeUrls.map(async (url) => {
      return await getData(url);
    })
  );
  const popularAnimeData = [
    ...popularAnimeDataTemp[0].data,
    // ...popularAnimeDataTemp[1].data,
  ];

  const trendingAnimeDataTemp = await Promise.all(
    trendingAnimeUrls.map(async (url) => {
      return await getData(url);
    })
  );
  const trendingAnimeData = [
    ...trendingAnimeDataTemp[0].data,
    // ...trendingAnimeDataTemp[1].data,
  ];

  return { popularAnimeData, trendingAnimeData };
}

export async function getDataById(id: number) {
  const url = `https://api.jikan.moe/v4/anime/${id}/full`;
  const data = (await getData(url))?.data as IsAnimeData | undefined;

  return data;
}
