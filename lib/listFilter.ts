type QueryObject = { value: number | string; label?: string | number };
export function mapQuery(
	queryName: string,
	queryArray: Array<QueryObject> | QueryObject
) {
	console.log(queryArray);
	let array: (string | number)[];
	if (queryArray !== null && queryArray !== undefined) {
		if (typeof queryArray === "object" && "value" in queryArray) {
			return `${queryName}=${queryArray.value}&`;
		}
		if (Array.isArray(queryArray) && queryArray.length >= 1) {
			array = queryArray.map((q) => q.value);
			const string = `${queryName}=${array.join(",")}&`;
			return string;
		}
	}
	return "";
}

type Query = QueryObject | null | undefined;
// makes the url clean
export function mapAllQueries(
	genres: Query,
	ratings: Query,
	year: Query,
	status: Query,
	score: Query,
	order: Query
): string {
	return `sfw=true&type=tv&${genres && mapQuery("genres", genres)}${
		ratings && mapQuery("rating", ratings)
	}${year && mapQuery("start_date", year)}${
		status && mapQuery("status", status)
	}&${score && mapQuery("min_score", score)}${
		order && mapQuery("order_by", order)
	}`;
}
export function getAllQueriesURL(
	genres: Query,
	ratings: Query,
	year: Query,
	status: Query,
	score: Query,
	order: Query
): string {
	const url = `https://api.jikan.moe/v4/anime?${mapAllQueries(
		genres,
		ratings,
		year,
		status,
		score,
		order
	)}`;

	return url;
}
