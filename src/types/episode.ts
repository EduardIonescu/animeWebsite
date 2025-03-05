export type Episode = {
  mal_id: number;
  aired: string;
  score: number;
  title: string;
  anime: {
    image_url: string;
    title: string;
    titleJapanese: string;
    score: number;
    year: number;
    mal_id: number;
    episodes_count: number;
  };
};

export type Episodes = {
  data: {
    mal_id: number;
    url: string;
    title: string;
    title_japanese: string;
    title_romanji: string;
    aired: string;
    score: number;
    filler: boolean;
    recap: boolean;
    forum_url: string;
  }[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
};
