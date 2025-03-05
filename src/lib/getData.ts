import { Episode, Episodes } from "@/types/episode";
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
export async function getData(
  url: string,
  shouldCache: boolean = true,
  retries = REFETECH.RETRIES
) {
  try {
    const options: RequestInit = shouldCache
      ? {
          cache: "force-cache",
          next: { revalidate: 43200 },
        }
      : {};

    const res = await fetch(url, options);

    if (res.ok || res.status === 404) return res.json();

    throw new Error(`${res.status}`);
  } catch (error) {
    if (retries > 0) {
      // limited requests per second
      await delay(REFETECH.DELAY);
      return await getData(url, shouldCache, retries - 1);
    }
  }
}

export async function getHomeData() {
  const popularAnimeUrls = [
    "https://api.jikan.moe/v4/top/anime?tv&limit=20",
    "https://api.jikan.moe/v4/top/anime?tv&page=2&limit=20",
  ];
  const trendingAnimeUrls = [
    "https://api.jikan.moe/v4/seasons/now?limit=20",
    "https://api.jikan.moe/v4/seasons/now?page=2&limit=20",
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
  ] as IsAnimeData[];

  const trendingAnimeDataTemp = await Promise.all(
    trendingAnimeUrls.map(async (url) => {
      return await getData(url);
    })
  );
  const trendingAnimeData = [
    ...trendingAnimeDataTemp[0].data,
    // ...trendingAnimeDataTemp[1].data,
  ] as IsAnimeData[];

  return { popularAnimeData, trendingAnimeData };
}

export async function getAiring(trendingData: IsAnimeData[]) {
  const episodes = await Promise.all(
    trendingData.map(async (item) => {
      const url = `https://api.jikan.moe/v4/anime/${item.mal_id}/episodes`;

      const res = (await getData(url)) as Episodes;

      if (!res || !("data" in res) || !res.data) {
        return;
      }

      const now = new Date().getTime();
      const episodes = res.data
        .filter((episode) => {
          const difference = now - new Date(episode.aired).getTime();
          const TWO_WEEKS_IN_MS = 14 * 24 * 60 * 60 * 1000;

          return difference <= TWO_WEEKS_IN_MS && difference <= now;
        })
        .map(
          (episode) =>
            ({
              mal_id: episode.mal_id,
              aired: episode.aired,
              score: episode.score,
              title: episode.title,
              anime: {
                image_url: item.images.webp.image_url,
                title: item.title_english,
                titleJapanese: item.title,
                score: item.score,
                year: item.aired.prop.from.year,
                mal_id: item.mal_id,
                episodes_count: item.episodes,
              },
            } as Episode)
        );

      return episodes;
    })
  );

  if (!episodes || episodes.length === 0) {
    return [];
  }

  return episodes
    .flat()
    .sort(
      (a, b) =>
        new Date(b?.aired ?? "").getTime() - new Date(a?.aired ?? "").getTime()
    )
    .filter((episode) => !!episode);
}

export async function getDataById(id: number) {
  const url = `https://api.jikan.moe/v4/anime/${id}/full`;
  const res = await getData(url);
  if (res && "status" in res && res.status === 404) {
    return { error: 404, data: undefined };
  }

  const data = res?.data as IsAnimeData | undefined;
  return { error: undefined, data };
}

export async function getDataRandom() {
  const randomURL = `https://api.jikan.moe/v4/random/anime`;
  const randomId = (await getData(randomURL, false))?.data.mal_id as
    | number
    | undefined;
  if (!randomId) {
    return { error: 404, data: undefined };
  }

  const { data, error } = await getDataById(randomId);
  if (error) {
    return { error: error ?? 404, data: undefined };
  }

  return { error: undefined, data };
}
