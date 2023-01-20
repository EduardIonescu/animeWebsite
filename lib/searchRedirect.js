import getData from "./getData";

import { parseQuery } from "./search";

export async function sendToPage(router, title) {
	function redirectToAnime(id) {
		router.push(`/anime/${id}`);
	}

	const searchableQuery = parseQuery(title);
	const url = `https://api.jikan.moe/v4/anime?sfw&type=tv&q=${searchableQuery}&limit=1`;
	const data = await getData(url);
	const id = data.data[0].mal_id;

	redirectToAnime(id);
}
