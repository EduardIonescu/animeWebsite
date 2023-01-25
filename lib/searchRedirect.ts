import { NextRouter } from "next/router";
import getData from "./getData";

import { parseQuery } from "./search";

export async function sendToPage(router: NextRouter, title: string) {
	function redirectToAnime(id: number) {
		router.push(`/anime/${id}`);
	}

	const searchableQuery = parseQuery(title);
	// There is some bug when using limit=1
	const url = `https://api.jikan.moe/v4/anime?sfw&letter=${searchableQuery}&limit=2`;
	const data = await getData(url);
	const id = data.data[0].mal_id;

	redirectToAnime(id);
}
